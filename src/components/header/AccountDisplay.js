import React from 'react'
import menu from '../assets/images/menu.svg'
import useCollapse from '../hooks/useCollaspe'
import Icon from '../layout/Icon'
import AccountMenuButtons from './AccountMenuButtons'

const AccountDisplay = () => {
  const { toggle, collapsed } = useCollapse(true, true)
  return (
    <div className="flex items-center">
      <Icon onClickAction={toggle} icon={menu} varient="small" />
      {!collapsed && <AccountMenuButtons />}
    </div>
  )
}

export default AccountDisplay