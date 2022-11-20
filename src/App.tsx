import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import OneSignal from 'react-native-onesignal';

import { Home } from './screens/Home';
import theme from './styles/theme';

export const App = () => {
  const [number, setnumber] = useState<number>(0);
  const [openedNotification, setOpenedNotification] = useState<number>(0);
  const [addNotification, setAddNotification] = useState<number>(0);
  const [decreaseNotification, setDecreaseNotification] = useState<number>(0);

  const notificationOpened = () => {
    setOpenedNotification((openedNumber) => openedNumber + 1);
  };

  const changeNumber = (type?: 'Add' | 'Decrease') => {
    if (type === 'Add') {
      setnumber((numberAction) => numberAction + 1);
      setAddNotification((addNumber) => addNumber + 1);
    } else {
      setnumber((numberAction) => numberAction - 1);
      setDecreaseNotification((decreaseNumber) => decreaseNumber + 1);
    }
    notificationOpened();
  };

  useEffect(() => {
    OneSignal.setAppId('0e37a136-4b3e-4180-a3d5-c7c22e8d3ac1');

    // promptForPushNotificationsWithUserResponse will show the native iOS or Android notification permission prompt.
    // We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 8)
    OneSignal.promptForPushNotificationsWithUserResponse();

    //Method for handling notifications received while app in foreground
    OneSignal.setNotificationWillShowInForegroundHandler(
      (notificationReceivedEvent) => {
        console.log(
          'OneSignal: notification will show in foreground:',
          notificationReceivedEvent,
        );
        const notification = notificationReceivedEvent.getNotification();
        // Complete with null means don't show a notification.
        notificationReceivedEvent.complete(notification);
      },
    );

    //Method for handling notifications opened
    OneSignal.setNotificationOpenedHandler((notification) => {
      console.log('OneSignal: notification opened:', notification);
      if (
        notification.notification.actionButtons &&
        notification.action.type !== 0
      ) {
        if (notification.action.actionId === 'Add') {
          changeNumber('Add');
        } else {
          changeNumber('Decrease');
        }
      } else {
        notificationOpened();
      }
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Home
        number={number}
        openedNotification={openedNotification}
        addNotification={addNotification}
        decreaseNotificaiton={decreaseNotification}
      />
    </ThemeProvider>
  );
};
