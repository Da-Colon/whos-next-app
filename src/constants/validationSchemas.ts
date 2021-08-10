import * as Yup from 'yup'

export const loginValidationSchema = () => {
  return Yup.object().shape({
    email: Yup.string().email('Incorrect email format').required('Email is required'),
    password: Yup.string().min(4, 'Password must be more than 4 characters').required('Password is required')
  })
}

export const signupValidationSchema = () => {
  return Yup.object().shape({
    email: Yup.string().email('Incorrect email format').required('Email is required'),
    password: Yup.string().required('Password is required')
  })
}

export const listNewValidationSchema = () => {
  return Yup.object().shape({
    listlength: Yup.number(),
    name: Yup.string().required('List name is required'),
    private: Yup.bool(),
    list: Yup.array().required('List is required'),
  })
}