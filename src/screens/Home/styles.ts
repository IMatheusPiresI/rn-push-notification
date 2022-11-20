import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-weight: bold;
`;

export const WrapperActionButtons = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const NotificationOpenedWrapper = styled.View`
  align-items: center;

  margin: ${RFValue(35)}px;
`;

export const WrapperActionNotify = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
`;

export const BoxInfoNotification = styled.View`
  align-items: center;
`;

export const TitleActionButton = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.shape};
  font-weight: 500;
`;

export const Number = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-weight: bold;

  margin-top: ${RFValue(10)}px;

  font-size: ${RFValue(40)}px;
`;
