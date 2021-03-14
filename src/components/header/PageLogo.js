import React from 'react'
import logo from '../assets/images/logo-white.svg'

const PageLogo = () => {
  return (
    <div className="flex justify-center items-center">
      <img alt="" src={logo} />
      <div className="text-white text-lg font-bold ml-2">Who's next?</div>
    </div>
  )
}

export default PageLogo