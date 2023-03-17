import { get } from 'lodash';
import { DefaultTheme } from 'styled-components';

export const getTheme =
  (themeProp: string) =>
  ({ theme }: { theme: DefaultTheme }): string =>
    get(theme, themeProp);
