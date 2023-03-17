import styled from 'styled-components/native';
import { getTheme } from 'scr/utils';

// colors
const textColor = getTheme('text');

export const Text = styled.Text`
  color: ${textColor};
`;
