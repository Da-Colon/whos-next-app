import * as Yup from 'yup'

export const loginValidationSchema = () => {
  return Yup.object().shape({
    email: Yup.string().required('email is required'),
    password: Yup.string().required('password is required')
  })
}

export const signupValidationSchema = () => {
  return Yup.object().shape({
    email: Yup.string().required('email is required'),
    password: Yup.string().required('password is required')
  })
}

export const listNewValidationSchema = () => {
  return Yup.object().shape({
    length: Yup.number(),
    name: Yup.string().required('List name is required'),
    private: Yup.bool(),
    list: Yup.array().required('List is required'),
  })
}