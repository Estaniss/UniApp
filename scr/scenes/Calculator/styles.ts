import styled from 'styled-components/native';
import { Picker } from '@react-native-picker/picker';
import { KeyboardAvoidingView, Touchable } from 'scr/components';
import { getTheme } from 'scr/utils';
import { moderateScale } from 'scr/modules';

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
  width: 100%;
  height: 100%;
`;

export const Select = styled(Picker)``;

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
