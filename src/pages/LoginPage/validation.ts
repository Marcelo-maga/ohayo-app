import * as yup from 'yup'

const schema = yup.object().shape({
  email: yup.string().email('Informe um email válido').required('Email é um campo obrigatorio'),
  password: yup.string().min(8, 'Crie uma senha maior').required('Senha é um campo obrigatorio')
})

export default schema
