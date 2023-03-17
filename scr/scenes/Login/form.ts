import { FormValidator } from 'scr/modules';

export const validationSchema = FormValidator.object().shape({
  login: FormValidator.string()
    .required('E-mail obrigatório')
    .email('E-mail inválido'),
  password: FormValidator.string().required('Senha obrigatória'),
});

export const initialValues: CredentialType = {
  login: '',
  password: '',
};
