import React from 'react'
import AccountDisplay from './AccountDisplay'
import Nav from './Nav'
import PageLogo from './PageLogo'

const Header = () => {
  const isLoggedIn = true
  return (
    <div className="flex items-center justify-between pt-4 px-6" style={{height: '4.5rem'}}>
      <PageLogo />
      {isLoggedIn && <Nav />}
      {!isLoggedIn && <AccountDisplay /> }
    </div>
  )
}

export default Header