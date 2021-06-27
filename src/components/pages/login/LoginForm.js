import React from 'react'
import Button from '../../layout/Button'
import Input from '../../layout/Input'
import Label from '../../layout/Label'

const LoginForm = ({values, errors, handleSubmit, handleChange}) => {
  const buttonDisabled = () => (!values.email || !values.password || errors.length === 0) === true
  return (
    <form className="p-4 flex flex-col gap-2" onSubmit={handleSubmit}>
      <Label text="Email" htmlFor="email" />
      <Input variant="text" type="email" name="email" id="email" onChange={handleChange} value={values.email} />
      <Label text="Password" htmlFor="password"  />
      <Input variant="text" type="current-password" name="password" id="password" onChange={handleChange} value={values.password}/>
      <div className="text-right mt-4">
        <Button type="submit" label="Login" variant="form" isDisabled={buttonDisabled()}/>
      </div>
    </form>
  )
}

export default LoginForm