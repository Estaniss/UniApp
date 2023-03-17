import React, { FC } from 'react';
import { Animated, View, TextStyle, StyleProp } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Touchable from '../Touchable';

interface IconType {
  name: string;
  touchable?: boolean;
  size?: number;
  color?: string;
  style?: StyleProp<TextStyle>;
  onPress?: () => void;
}

export const Icon: FC<IconType> = ({
  name = '',
  touchable = false,
  size = 20,
  color = undefined,
  style = {},
  onPress = (): void => {},
}) => (
  <Animated.View style={[style]}>
    <Touchable disabled={!touchable} onPress={onPress}>
      <View>
        <MaterialIcons name={name} color={color} size={size} />
      </View>
    </Touchable>
  </Animated.View>
);

export default Icon;
