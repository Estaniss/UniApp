import { FormikProps, useFormikContext } from 'formik';
import React from 'react';

import {
  ButtonText,
  FormWrapper,
  LoginText,
  SubmitButton,
  TextInput,
  Wrapper,
} from './styles';

const Login: React.FC = () => {
  const {
    values,
    handleBlur,
    handleSubmit,
    setFieldValue,
  }: FormikProps<CredentialType> = useFormikContext();

  return (
    <Wrapper>
      <LoginText>LOGIN</LoginText>
      <FormWrapper>
        <TextInput
          placeholder="Email Address"
          keyboardType="email-address"
          value={values.login}
          onBlur={handleBlur('login')}
          onChangeText={(e: string) => setFieldValue('login', e.trim())}
        />
        <TextInput
          placeholder="Password"
          value={values.password}
          onBlur={handleBlur('password')}
          onChangeText={(e: string) => setFieldValue('password', e.trim())}
          secureTextEntry
        />
        <SubmitButton onPress={handleSubmit}>
          <ButtonText>Entrar</ButtonText>
        </SubmitButton>
      </FormWrapper>
    </Wrapper>
  );
};

export default Login;
