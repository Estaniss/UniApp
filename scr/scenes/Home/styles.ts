import styled from 'styled-components/native';
import { Touchable } from 'scr/components';

export const Wrapper = styled.View`
  width: 100%;
  height: 100%;
`;

export const MenuWrapper = styled.View`
  padding: 16px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const IconButtom = styled(Touchable)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(120, 134, 190, 0.16);
  border: 1px solid rgba(120, 134, 190, 0.4);
  width: 48%;
  border-radius: 20px;
  padding-vertical: 30px;
`;
export const IconText = styled.Text``;
