import { FormikProps, useFormikContext } from 'formik';
import React from 'react';
import { If } from 'react-if';
import { LoadingIndicator } from 'scr/components';
import {
  ButtonText,
  EmptyWrapper,
  ErrorText,
  FormWrapper,
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
    errors,
    isSubmitting,
  }: FormikProps<CredentialType> = useFormikContext();
  return (
    <Wrapper>
      <FormWrapper>
        <TextInput
          placeholder="Email Address"
          keyboardType="email-address"
          value={values.login}
          onBlur={handleBlur('login')}
          onChangeText={(e: string) => setFieldValue('login', e.trim())}
        />
        {errors.login && <ErrorText>{errors?.login}</ErrorText>}
        <TextInput
          placeholder="Password"
          value={values.password}
          onBlur={handleBlur('password')}
          onChangeText={(e: string) => setFieldValue('password', e.trim())}
          secureTextEntry
        />
        {errors.password && <ErrorText>{errors.password}</ErrorText>}
        <If condition={!isSubmitting}>
          <SubmitButton onPress={handleSubmit}>
            <ButtonText>Entrar</ButtonText>
          </SubmitButton>
        </If>
        <If condition={isSubmitting}>
          <EmptyWrapper>
            <LoadingIndicator large />
          </EmptyWrapper>
        </If>
      </FormWrapper>
    </Wrapper>
  );
};

export default Login;
