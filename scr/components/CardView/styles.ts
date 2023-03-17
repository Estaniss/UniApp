import { getTheme } from 'scr/utils/helpers/getTheme';
import styled from 'styled-components/native';

//Spacing
const smallSpacing = getTheme('smallSpacing');
const mediumSpacing = getTheme('mediumSpacing');
const sectionSpacing = getTheme('sectionSpacing');

export const Wrapper = styled.View.attrs({ activeOpacity: 1 })`
  background-color: #fff;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  shadow-opacity: 1;
  shadow-radius: 3px;
  shadow-color: rgba(0, 0, 0, 0.2);
  shadow-offset: 0px 1px;
  elevation: 3;
  height: 70px;
  margin-horizontal: ${sectionSpacing};
  margin-top: ${mediumSpacing};
  padding-horizontal: ${smallSpacing};
`;
