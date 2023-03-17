import styled from 'styled-components/native';
import { KeyboardAvoidingView, Touchable, Typography } from 'scr/components';
import { moderateScale } from 'scr/modules';
import { getTheme } from 'scr/utils/helpers/getTheme';

// colors
const primaryColor = getTheme('primary');
const secondaryColor = getTheme('secondary');
const backgroundColor = getTheme('background');
const contrastColor = getTheme('contrast');

//Spacing
const smallSpacing = getTheme('smallSpacing');

//Radius
const mediumRadius = getTheme('mediumRadius');

export const Wrapper = styled.View`
  justify-content: center;
  display: flex;
  align-items: center;
  background-color: ${backgroundColor};
  width: 100%;
  flex: 1;
`;

export const LoginText = styled.Text`
  font-size: 32px;
`;

export const SubmitButton = styled(Touchable)`
  width: 100%;
  padding: ${moderateScale(10)}px;
  height: ${moderateScale(43)}px;
  text-align: center;
  margin-top: ${smallSpacing};
  border-width: 1px;
  border-radius: ${mediumRadius};
  background-color: ${primaryColor};
  color: ${secondaryColor};
  display: flex;
  justify-content: center;
`;

export const TextInput = styled.TextInput`
  width: 100%;
  padding: ${moderateScale(10)}px;
  height: ${moderateScale(43)}px;
  text-align: left;
  margin-top: ${smallSpacing};
  border-color: ${primaryColor};
  border-width: 1px;
  border-radius: ${mediumRadius};
`;

export const FormWrapper = styled(KeyboardAvoidingView).attrs({
  keyboardOffset: 44,
})`
  margin-horizontal: ${moderateScale(10)}px;
  justify-content: center;
  align-items: center;
`;

export const ErrorText = styled(Typography)`
  color: ${({ theme }): string => theme.colors.failure};
  align-self: flex-start;
`;

export const EmptyWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${backgroundColor};
  padding-vertical: ${smallSpacing};
  margin-top: ${moderateScale(50)}px;
`;
