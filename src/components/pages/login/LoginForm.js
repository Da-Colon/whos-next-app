import React from 'react'
import Button from '../../layout/Button'
import Input from '../../layout/Input'
import Label from '../../layout/Label'
import ErrorUI from '../../layout/ErrorUI'

const LoginForm = ({values, errors, touched, handleSubmit, handleChange}) => {
  const buttonDisabled = () => (!values.email || !values.password) === true
  return (
    <form className="p-4 mt-16 flex flex-col gap-2 w-1/2" onSubmit={handleSubmit}>
      <Label text="Email" htmlFor="email" />
      <Input variant="text" type="text" name="email" id="email" onChange={handleChange} value={values.email} />
      <Label text="Password" htmlFor="password"  />
      <Input variant="text" type="current-password" name="password" id="password" onChange={handleChange} value={values.password}/>
      {!!errors && touched.email &&  touched.password &&
        Object.values(errors).map((error) => <ErrorUI key={error} error={error} />)
      }
      <div className="text-right mt-4">
        <Button type="submit" label="Login" variant="form" isDisabled={buttonDisabled()}/>
      </div>
    </form>
  )
}

export default LoginForm