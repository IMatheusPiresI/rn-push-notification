import React from 'react';
import { StatusBar } from 'react-native';

import * as S from './styles';

type Props = {
  number: number;
  openedNotification: number;
  addNotification: number;
  decreaseNotificaiton: number;
};

export const Home = ({
  number,
  openedNotification,
  decreaseNotificaiton,
  addNotification,
}: Props) => (
  <S.Container>
    <StatusBar
      barStyle="light-content"
      translucent
      backgroundColor="transparent"
    />

    <S.WrapperActionButtons>
      <S.NotificationOpenedWrapper>
        <S.TitleActionButton>Notification Opened</S.TitleActionButton>
        <S.Number>{openedNotification}</S.Number>
      </S.NotificationOpenedWrapper>
      <S.WrapperActionNotify>
        <S.BoxInfoNotification>
          <S.TitleActionButton>Notification Clicked Add</S.TitleActionButton>
          <S.Number>{addNotification}</S.Number>
        </S.BoxInfoNotification>
        <S.BoxInfoNotification>
          <S.TitleActionButton>
            Notification Clicked Decrease
          </S.TitleActionButton>
          <S.Number>{decreaseNotificaiton}</S.Number>
        </S.BoxInfoNotification>
      </S.WrapperActionNotify>
      <S.NotificationOpenedWrapper>
        <S.TitleActionButton>Number</S.TitleActionButton>
        <S.Number>{number}</S.Number>
      </S.NotificationOpenedWrapper>
    </S.WrapperActionButtons>
  </S.Container>
);
