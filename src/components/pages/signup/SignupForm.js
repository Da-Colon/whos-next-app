import React from 'react'
import Button from '../../layout/Button'
import Input from '../../layout/Input'
import Label from '../../layout/Label'
import ErrorUI from '../../layout/ErrorUI'

const SignupForm = ({values, errors, touched, handleSubmit, handleChange}) => {
  const buttonDisabled = () => (!values.email || !values.password || errors.length === 0) === true
  return (
    <form className="p-4 flex flex-col gap-2" onSubmit={handleSubmit}>
      <Label text="Email" htmlFor="email" />
      <Input type="email" variant="text" name="email" id="email" onChange={handleChange} value={values.email} />
      <Label text="Password" htmlFor="password"  />
      <Input type="password" variant="text" name="password" id="password" onChange={handleChange} value={values.password}/>
      {!!errors && touched.email &&  touched.password &&
        Object.values(errors).map((error) => <ErrorUI key={error} error={error} />)
      }
      <div className="text-right mt-4">
        <Button type="submit" label="Signup" variant="form" isDisabled={buttonDisabled()}/>
      </div>
    </form>
  )
}

export default SignupForm