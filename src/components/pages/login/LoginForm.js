import React from 'react'
import Button from '../../layout/Button'
import Input from '../../layout/Input'
import Label from '../../layout/Label'

const LoginForm = ({values, errors, handleSubmit, handleChange}) => {
  return (
    <form className="p-4 flex flex-col">
      <Label text="Username" htmlFor="username" />
      <Input name="username" id="username" onChange={handleChange} value={values.username} />
      <Label text="Password" htmlFor="password"  />
      <Input name="password" id="password" onChange={handleChange} value={values.password}/>
      <div className="text-right mt-4">
        <Button label="Login" varient="form" />
      </div>
    </form>
  )
}

export default LoginForm