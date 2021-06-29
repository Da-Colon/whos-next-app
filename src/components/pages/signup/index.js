import React from 'react'
import { useHistory } from 'react-router-dom'
import { signupInitialValues } from '../../../constants/initialValues'
import { signupValidationSchema } from '../../../constants/validationSchemas'
import { useUserData } from '../../../context/UserContext'
import FormikContainer from '../../../services/FormikContainer'
import Container from '../../layout/Container'
import Heading from '../../layout/Heading'
import SignupForm from './SignupForm'

const SignupPage = () => {
  const { userSignup } = useUserData()
  const history = useHistory()
  const handleSubmit = async (values) => {
    const success = await userSignup(values)
    if(success) {
      history.push('/login')
    }
  }
  return (
    <Container>
      <Heading variant="one" label="Sign up to get started!" addClasses="absolute left-12"/>
      <FormikContainer handleSubmit={(values) => handleSubmit(values)} initialValues={signupInitialValues} validationSchema={signupValidationSchema} >
        {({values, errors, handleSubmit, touched, handleChange}) => (
          <SignupForm values={values} touched={touched} errors={errors} handleSubmit={handleSubmit} handleChange={handleChange} />
        )}
      </FormikContainer>
    </Container>
  )
}

export default SignupPage