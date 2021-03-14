import React from 'react'
import menu from '../assets/images/menu.svg'
import useCollapse from '../hooks/useCollaspe'
import AccountMenuButtons from './AccountMenuButtons'

const AccountDisplay = () => {
  const { toggle, collapsed } = useCollapse(true, true)
  return (
    <div className="flex items-center mt-4">
      <div className="w-6 h-auto cursor-pointer" onClick={toggle}>
        <img src={menu} alt="" className="w-full h-full"/>
      </div>
      {!collapsed && <AccountMenuButtons />}
    </div>
  )
}

export default AccountDisplay