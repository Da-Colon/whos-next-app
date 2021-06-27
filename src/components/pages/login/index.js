import React from 'react'
import { loginInitialValues } from '../../../constants/initialValues'
import { loginValidationSchema } from '../../../constants/validationSchemas'
import Heading from '../../layout/Heading'
import FormikContainer from '../../../services/FormikContainer'
import Container from '../../layout/Container'
import LoginForm from './LoginForm'
import { useUserData } from '../../../context/UserContext'
import { useHistory } from 'react-router-dom'

const LoginPage = ({ cookieHandler }) => {
  const { userSignin } = useUserData()
  const history = useHistory()
  const handleSubmit = async (values) => {
    const token = await userSignin(values)
    if(token) {
      cookieHandler(token)
      history.push('/')
    }
  }
  return (
    <Container>
      <Heading variant="one" label="Welcome Back!" />
      <FormikContainer handleSubmit={(values) => handleSubmit(values)} initialValues={loginInitialValues} validationSchema={loginValidationSchema} >
        {({values, errors, handleSubmit, handleChange}) => (
          <LoginForm values={values} errors={errors} handleSubmit={handleSubmit} handleChange={handleChange} />
        )}
      </FormikContainer>
    </Container>
  )
}

export default LoginPage