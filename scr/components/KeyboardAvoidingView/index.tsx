import React, { FC } from 'react';
import {
  KeyboardAvoidingView as Wrapper,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { isIOS } from 'scr/utils';

type Behavior = 'height' | 'position' | 'padding' | undefined;

const defaultBehavior: Behavior = isIOS() ? 'padding' : undefined;
const defaultStyle = { flex: 1 };

interface Props {
  style?: StyleProp<ViewStyle>;
  behavior?: Behavior;
  enabled?: boolean;
  keyboardOffset?: number;
}

const KeyboardAvoidingView: FC<Props> = ({
  style = defaultStyle,
  behavior = defaultBehavior,
  keyboardOffset = 20,
  ...rest
}) => (
  <Wrapper
    style={style}
    behavior={behavior}
    enabled={true}
    keyboardVerticalOffset={keyboardOffset}
    {...rest}
  />
);

export default KeyboardAvoidingView;
