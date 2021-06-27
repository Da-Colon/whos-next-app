import React from 'react'
import menu from '../assets/images/menu.svg'
import useCollapse from '../hooks/useCollaspe'
import Icon from '../layout/Icon'
import AccountMenuButtons from './AccountMenuButtons'

const AccountDisplay = () => {
  const { toggle, collapsed } = useCollapse(false, true)
  return (
    <div className="flex items-center gap-4">
      <Icon onClickAction={toggle} icon={menu} variant="small" />
      {!collapsed && <AccountMenuButtons />}
    </div>
  )
}

export default AccountDisplay