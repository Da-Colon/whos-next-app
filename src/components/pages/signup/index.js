import React from 'react'
import { signupInitialValues } from '../../../constants/initialValues'
import { signupValidationSchema } from '../../../constants/validationSchemas'
import FormikContainer from '../../../services/FormikContainer'
import Container from '../../layout/Container'
import Heading from '../../layout/Heading'
import SignupForm from './SignupForm'

const SignupPage = () => {
  return (
    <Container>
      <Heading varient="heading-one" label="Sign up to get started!" />
      <FormikContainer handleSubmit={() => null} initialValues={signupInitialValues} validationSchema={signupValidationSchema} >
        {({values, errors, handleSubmit, handleChange}) => (
          <SignupForm values={values} errors={errors} handleSubmit={handleSubmit} handleChange={handleChange} />
        )}
      </FormikContainer>
    </Container>
  )
}

export default SignupPage