import React from 'react'
import { ButtonLink } from '../layout/Button'

const AccountMenuButtons = () => {
  return (
    <div className="flex flex-col gap-2 sm:flex-row">
      <ButtonLink to="/login" type="button" label="Log in" />
      <ButtonLink to="/signup" type="button" label="Sign up" />
    </div>
  )
}

export default AccountMenuButtons