import { RefObject } from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';

type TypographyStyle = {
  fontSize: number;
  lineHeight: number;
};

export type TypographyTheme = {
  largeTitle: TypographyStyle;
  title1: TypographyStyle;
  title2: TypographyStyle;
  title3: TypographyStyle;
  title4: TypographyStyle;
  headline: TypographyStyle;
  body: TypographyStyle;
  callout: TypographyStyle;
  subhead: TypographyStyle;
  footnote: TypographyStyle;
  caption1: TypographyStyle;
  caption2: TypographyStyle;
};

export interface TypographyType {
  variant?: TypographyVariants;
  children?: string | string[];
  style?: StyleProp<TextStyle>;
  textRef?: RefObject<Text>;
  id?: string;
  accessibility?: string;
}
