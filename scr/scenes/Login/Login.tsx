import React from 'react';

import { LoginText, Wrapper } from './styles';

const Login: React.FC = () => {
  return (
    <Wrapper>
      <LoginText>Olá Mundo</LoginText>
      {/* <FormWrapper>
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
      </FormWrapper> */}
    </Wrapper>
  );
};

export default Login;
