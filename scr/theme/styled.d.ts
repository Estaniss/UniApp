import 'styled-components';

interface IPalette {
  main: string;
  contrastText: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    // colors
    disabled: string;
    info: string;
    success: string;
    warning: string;
    failure: string;
    background: string;
    placeholder: string;
    text: string;
    primary: string;
    secondary: string;
    tertiary: string;
    quartiary: string;
    // radius
    smallRadius: string;
    mediumRadius: string;
    largeRadius: string;
    modalRadius: string;
    buttonRadius: string;
    // spacing
    smallestSpacing: string;
    smallSpacing: string;
    mediumSpacing: string;
    headerSpacing: string;
    largeSpacing: string;
    giantSpacing: string;
    sceneSpacing: string;
    sectionSpacing: string;
    statusHeight: string;
    screenWidth: number;
    screenHeight: number;
    // typography
    largeTitle: TypographyStyle;
    title1: TypographyStyle;
    title2: TypographyStyle;
    title3: TypographyStyle;
    headline: TypographyStyle;
    body: TypographyStyle;
    callout: TypographyStyle;
    subhead: TypographyStyle;
    footnote: TypographyStyle;
    caption1: TypographyStyle;
    caption2: TypographyStyle;
  }
}
