import React from 'react'
import Button from '../layout/Button'

const Nav = () => {
  return (
    <div className="flex">
      <Button type="button" varient="menu" addClassnames="ml-4" label="Classes" />
      <Button type="button" varient="menu" addClassnames="ml-4" label="Picker" />
    </div>
  )
}

export default Nav