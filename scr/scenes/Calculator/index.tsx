import React from 'react';
import Calculator from './Calculator';
import { Formik } from 'formik';
import { Alert } from 'react-native';

const CalculatorContainer: React.FC = () => {
  const initialValues: CalcType = {
    oparation: 'mult',
    valueOne: 0,
    ValueTwo: 0,
  };

  const onSubmit = (formValues: CalcType) => {
    switch (formValues.oparation) {
      case 'adi':
        const adi = formValues.valueOne + formValues.ValueTwo;
        Alert.alert(`A soma dos valores é ${adi}`);
        break;
      case 'sub':
        const sub = formValues.valueOne - formValues.ValueTwo;
        Alert.alert(`A subtração dos valores é  ${sub}`);
        break;
      case 'mult':
        const mult = formValues.valueOne * formValues.ValueTwo;
        Alert.alert(`A multiplicação dos valores é  ${mult}`);
        break;
      case 'div':
        const div = formValues.valueOne / formValues.ValueTwo;
        Alert.alert(`A divisão dos valores é  ${div}`);
        break;
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Calculator />
    </Formik>
  );
};

export default CalculatorContainer;
