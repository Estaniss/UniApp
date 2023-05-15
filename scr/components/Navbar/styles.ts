import { getTheme } from 'scr/utils';
import styled from 'styled-components/native';
import { MaterialIcon } from '..';

// colors
const primaryColor = getTheme('primary');
const contrastColor = getTheme('contrast');

export const Wrapper = styled.View`
  width: 100%;
  height: 10%;
  background-color: ${primaryColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const NavText = styled.Text`
  color: ${contrastColor};
`;

export const Icons = styled(MaterialIcon)`
  margin-horizontal: 16px;
`;
