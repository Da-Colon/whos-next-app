import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../layout/Button'

const AccountMenuButtons = () => {
  return (
    <div className="flex flex-col gap-2 sm:flex-row">
      <NavLink to="/login">
        <Button type="button" varient="menu" addClassnames="" label="Log in" />
      </NavLink>
      <NavLink to="/signup">
        <Button type="button" varient="menu" addClassnames="" label="Sign up" />
      </NavLink>
    </div>
  )
}

export default AccountMenuButtons