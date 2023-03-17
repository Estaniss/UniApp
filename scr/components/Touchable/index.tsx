import React, { FC } from 'react';
import { TouchableOpacity, GestureResponderEvent } from 'react-native';
import { HapticFeedbackTypes } from 'react-native-haptic-feedback';
import { RNHapticFeedback } from 'scr/modules';

interface TouchableType {
  disabled?: boolean;
  haptic?: HapticFeedbackTypes;
  onPress?: (param: GestureResponderEvent) => void;
  children: JSX.Element;
}

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: true,
};

const Touchable: FC<TouchableType> = ({
  onPress = (): void => {},
  haptic = 'impactLight',
  disabled = false,
  children,
  ...rest
}) => (
  <TouchableOpacity
    {...rest}
    disabled={disabled}
    onPress={(e): void => {
      RNHapticFeedback.trigger(haptic, options);
      onPress(e);
    }}
  >
    {children}
  </TouchableOpacity>
);

export default Touchable;
