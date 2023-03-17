import React, { FC } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { iOSUIKit } from 'react-native-typography';
import { Text } from './styles';

export type TypographyVariants =
  | 'largeTitleEmphasized'
  | 'title3Emphasized'
  | 'title3'
  | 'bodyEmphasized'
  | 'body'
  | 'subheadEmphasized'
  | 'subhead'
  | 'subheadShort'
  | 'callout'
  | 'footnoteEmphasized'
  | 'footnote'
  | 'caption2Emphasized'
  | 'caption2';

interface TypographyType {
  variant?: TypographyVariants;
  children?: string | string[] | JSX.Element;
  style?: StyleProp<TextStyle>;
}

const Typography: FC<TypographyType> = ({
  style = [{}],
  variant = 'body',
  children,
  ...rest
}) => (
  <Text style={[iOSUIKit[variant], style]} {...rest}>
    {children}
  </Text>
);

export default Typography;
