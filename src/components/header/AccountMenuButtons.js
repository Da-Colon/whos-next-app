import React from 'react'
import Button from '../layout/Button'

const AccountMenuButtons = () => {
  return (
    <div className="flex flex-col gap-2 sm:flex-row">
      <Button to="/login" type="button" varient="link" addClassnames="" label="Log in" />
      <Button to="/signup" type="button" varient="link" addClassnames="" label="Sign up" />
    </div>
  )
}

export default AccountMenuButtons