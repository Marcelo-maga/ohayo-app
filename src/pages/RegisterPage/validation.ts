import * as yup from 'yup'

const schema = yup.object().shape({
  email: yup.string().email('Informe um email válido').required('Email é um campo obrigatorio'),
  password: yup.string().min(8, 'Crie uma senha maior').required('Senha é um campo obrigatorio'),
  passConf: yup.string().oneOf([yup.ref('password'), null], 'As senhas não são iguais').required('Confirme sua senha')

})

export default schema
