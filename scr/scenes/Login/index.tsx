import React from 'react';
import { Keyboard } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import Login from './Login';
import { Formik, FormikHelpers } from 'formik';
import ResponseError from 'scr/utils/errors/ResponseError';
import { Stacks } from 'scr/navigation';
import { showAlert } from 'scr/utils';
import { AuthApi } from 'scr/api';
import { initialValues, validationSchema } from './form';

const LoginContainer: React.FC = () => {
  const navigation = useNavigation();

  const onSubmit = async (
    formValues: CredentialType,
    { setSubmitting }: FormikHelpers<CredentialType>,
  ): Promise<void> => {
    setSubmitting(true);
    showAlert('clicou');
    try {
      await AuthApi.login(formValues);
      Keyboard.dismiss();
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
    } catch (error) {
      if (error instanceof ResponseError) {
        showAlert(error.message);
      }
    } finally {
      setSubmitting(false);
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
