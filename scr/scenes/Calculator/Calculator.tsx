import React from 'react';
import {
  FormWrapper,
  Select,
  SubmitButton,
  TextInput,
  Wrapper,
} from './styles';
import { Navbar } from 'scr/components';
import { ButtonText } from '../Login/styles';
import { FormikProps, useFormikContext } from 'formik';

const Calculator: React.FC = () => {
  const {
    values,
    handleBlur,
    handleSubmit,
    setFieldValue,
    handleChange,
  }: FormikProps<CalcType> = useFormikContext();

  return (
    <Wrapper>
      <Navbar title="Calculadora" />
      <FormWrapper>
        <Select
          selectedValue={'adi'}
          onValueChange={(e: string) => setFieldValue('oparation', e)}
        >
          <Select.Item label="Adição" value="adi" />
          <Select.Item label="Subtração" value="sub" />
          <Select.Item label="Mutiplicação" value="mult" />
          <Select.Item label="Divisão" value="div" />
        </Select>
        <TextInput
          placeholder="Valor 1"
          keyboardType="numeric"
          value={values.valueOne}
          onBlur={handleBlur('valueOne')}
          onChangeText={handleChange('valueOne')}
        />
        <TextInput
          placeholder="Valor 2"
          keyboardType="numeric"
          value={values.ValueTwo}
          onBlur={handleBlur('ValueTwo')}
          onChangeText={handleChange('ValueTwo')}
        />
        <SubmitButton onPress={handleSubmit}>
          <ButtonText>Calcular</ButtonText>
        </SubmitButton>
      </FormWrapper>
    </Wrapper>
  );
};

export default Calculator;
