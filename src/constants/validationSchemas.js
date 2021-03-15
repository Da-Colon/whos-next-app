import * as Yup from 'yup'

export const loginValidationSchema = () => {
  return Yup.object().shape({
    username: Yup.string().required('username is required'),
    password: Yup.string().required('password is required')
  })
}

export const signupValidationSchema = () => {
  return Yup.object().shape({
    username: Yup.string().required('username is required'),
    password: Yup.string().required('password is required')
  })
}