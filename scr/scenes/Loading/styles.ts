import styled from 'styled-components/native';
import { getTheme } from 'scr/utils/helpers/getTheme';

const backgroundColor = getTheme('background');

export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${backgroundColor};
`;
