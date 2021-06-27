import React from 'react'
import { useHistory } from 'react-router-dom'
import { useUserData } from '../../context/UserContext'
import Button, { ButtonLink } from '../layout/Button'

const Nav = ({cookieHandler}) => {
  const history = useHistory()
  const { userLogout } = useUserData()
  const logout = () => {
    userLogout(cookieHandler)
    history.push('/')
  }
  return (
    <div className="flex">
      <ButtonLink to="/lists" type="button" addClasses="ml-4" label="Lists" />
      <ButtonLink to="/picker" type="button" addClasses="ml-4" label="Picker" />
      <Button variant="menu" type="button" addClasses="ml-4" label="Logout" onClick={logout}/>
    </div>
  )
}

export default Nav