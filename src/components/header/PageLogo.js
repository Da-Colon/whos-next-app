import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo-white.svg'

const PageLogo = () => {
  return (
    <NavLink to="/" className="flex justify-center items-center cursor-pointer">
      <img alt="" src={logo} />
      <div className="text-white text-lg font-bold ml-2">Who's next?</div>
    </NavLink>
  )
}

export default PageLogo