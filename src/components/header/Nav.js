import React from 'react'
import Button from '../layout/Button'

const Nav = () => {
  return (
    <div className="flex">
      <Button to="/lists" type="button" varient="link" addClassnames="ml-4" label="Lists" />
      <Button to="/picker" type="button" varient="link" addClassnames="ml-4" label="Picker" />
    </div>
  )
}

export default Nav