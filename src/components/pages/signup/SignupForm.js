import React from 'react'
import Button from '../../layout/Button'
import Input from '../../layout/Input'
import Label from '../../layout/Label'

const SignupForm = ({values, errors, handleSubmit, handleChange}) => {
  return (
    <form className="p-4 flex flex-col">
      <Label text="Email" htmlFor="email" />
      <Input type="email" variant="text" name="email" id="email" onChange={handleChange} value={values.email} />
      <Label text="Password" htmlFor="password"  />
      <Input type="password" variant="text" name="password" id="password" onChange={handleChange} value={values.password}/>
      <div className="text-right mt-4">
        <Button label="Signup" variant="form" />
      </div>
    </form>
  )
}

export default SignupForm