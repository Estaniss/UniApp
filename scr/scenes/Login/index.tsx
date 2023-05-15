import React from 'react';
import { CommonActions, useNavigation } from '@react-navigation/native';
import Login from './Login';
import { Formik } from 'formik';
import { showAlert } from 'scr/utils';
import { initialValues, validationSchema } from './form';
import { Stacks } from 'scr/navigation';

const LoginContainer: React.FC = () => {
  const navigation = useNavigation();

  const credentials: CredentialType = {
    login: 'thomas@gmail.com',
    password: '123qwe',
  };

  const onSubmit = (formValues: CredentialType) => {
    console.log('formValues', formValues);
    if (
      credentials.login === formValues.login &&
      credentials.password === formValues.password
    ) {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name: Stacks.PRIVATE,
            },
          ],
        }),
      );
    } else {
      showAlert('Email ou Password incorreto');
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Login />
    </Formik>
  );
};

export default LoginContainer;
