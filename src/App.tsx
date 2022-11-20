import React, { useEffect, useReducer } from 'react';
import { ThemeProvider } from 'styled-components/native';
import OneSignal from 'react-native-onesignal';

import { Home } from './screens/Home';
import theme from './styles/theme';

const initialState = {
  number: 0,
  openedNotification: 0,
  addNotification: 0,
  decreaseNotification: 0,
};

type State = typeof initialState;

type Action = {
  type: string;
  payload?: number;
};

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state: State, action: Action) {
    switch (action.type) {
      case 'increment':
        return {
          ...state,
          number: state.number + 1,
          addNotification: state.addNotification + 1,
        };

      case 'decrement':
        return {
          ...state,
          number: state.number - 1,
          decreaseNotification: state.decreaseNotification + 1,
        };

      case 'openedNotify':
        return {
          ...state,
          openedNotification: state.openedNotification + 1,
        };

      default:
        return state;
    }
  }

  const notificationOpened = () => {
    dispatch({
      type: 'openedNotify',
    });
  };

  const changeNumber = (type?: 'Add' | 'Decrease') => {
    if (type === 'Add') {
      dispatch({
        type: 'increment',
      });
    } else {
      dispatch({
        type: 'decrement',
      });
    }
  };

  useEffect(() => {
    OneSignal.setAppId('0e37a136-4b3e-4180-a3d5-c7c22e8d3ac1');

    //Method for handling notifications received while app in foreground
    OneSignal.setNotificationWillShowInForegroundHandler(
      (notificationReceivedEvent) => {
        const notification = notificationReceivedEvent.getNotification();
        // Complete with null means don't show a notification.
        notificationReceivedEvent.complete(notification);
      },
    );

    //Method for handling notifications opened
    OneSignal.setNotificationOpenedHandler((notification) => {
      if (
        notification.notification.actionButtons &&
        notification.action.type !== 0
      ) {
        if (notification.action.actionId === 'Add') {
          changeNumber('Add');
        } else {
          changeNumber('Decrease');
        }
      }
      notificationOpened();
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Home
        number={state.number}
        openedNotification={state.openedNotification}
        addNotification={state.addNotification}
        decreaseNotificaiton={state.decreaseNotification}
      />
    </ThemeProvider>
  );
};
