import * as yup from 'yup'

const schema = yup.object().shape({
  email: yup.string().email('Informe um email válido').required('Email é um campo obrigatorio'),
  password: yup.string().min(6, 'Crie uma senha maior').required('Senha é um campo obrigatorio'),
  passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required')
})

export default schema
