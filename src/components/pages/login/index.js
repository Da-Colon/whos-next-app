import React from 'react'
import { loginInitialValues } from '../../../constants/initialValues'
import { loginValidationSchema } from '../../../constants/validationSchemas'
import Heading from '../../layout/Heading'
import FormikContainer from '../../../services/FormikContainer'
import Container from '../../layout/Container'
import LoginForm from './LoginForm'

const LoginPage = () => {
  return (
    <Container>
      <Heading varient="heading-one" label="Welcome Back!" />
      <FormikContainer handleSubmit={() => null} initialValues={loginInitialValues} validationSchema={loginValidationSchema} >
        {({values, errors, handleSubmit, handleChange}) => (
          <LoginForm values={values} errors={errors} handleSubmit={handleSubmit} handleChange={handleChange} />
        )}
      </FormikContainer>
    </Container>
  )
}

export default LoginPage