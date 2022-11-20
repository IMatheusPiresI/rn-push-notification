import { Dimensions } from 'react-native';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';

const { width, height } = Dimensions.get('window');

export default {
  screenWidth: width,
  screenHeight: height,
  statusBarHeight: getStatusBarHeight(),
  bottomSpaceHeight: getBottomSpace(),
};
