import { Dimensions } from 'react-native';
import { moderateScale, verticalScale } from '../modules';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default {
  smallestSpacing: `${moderateScale(3)}px`,
  smallSpacing: `${moderateScale(8)}px`,
  mediumSpacing: `${moderateScale(12)}px`,
  headerSpacing: `${verticalScale(20)}px`,
  largeSpacing: `${moderateScale(22)}px`,
  giantSpacing: `${moderateScale(26)}px`,
  sceneSpacing: `${moderateScale(32)}px`,
  sectionSpacing: `${moderateScale(38)}px`,
  screenWidth,
  screenHeight,
} as Spacings;
