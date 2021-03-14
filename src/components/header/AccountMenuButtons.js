import React from 'react'
import Button from '../layout/Button'

const AccountMenuButtons = () => {
  return (
    <div className="flex">
      <Button type="button" varient="menu" addClassnames="ml-4" label="Log in" />
      <Button type="button" varient="menu" addClassnames="ml-4" label="Sign up" />
    </div>
  )
}

export default AccountMenuButtons