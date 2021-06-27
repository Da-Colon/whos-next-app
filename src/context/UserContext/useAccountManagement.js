import { useState } from "react"
import request from "../../request"

const useAccountManagement = () => {
  const [ user, setUser ] = useState(null)
  const [ loggedIn, setLoggedIn ] = useState(false)
  const [ error, setError ] = useState(false)
  const clearError = () => {
    setError(false)
  }

  const userSignin = async (values) => {
    try {
      const userResponse = await request('auth', 'POST', values)
      if(userResponse.message === 'ok!') {
        setUser(userResponse.user)
        setLoggedIn(true)
        return userResponse.token
      }
    } catch (e) {
      setError('There was an error with the request')
    }
    
  }

  const userSignup = async (values) => {
    try {
      const userResponse = await request('users/', 'POST', values)
      if(userResponse.message === 'User has been registered') {
        return 'success'
      }
    } catch (e) {
      setError('There was an error with the request')
    }
  }

  const userLogout = async (cookieHandler) => {
    setUser(null)
    setLoggedIn(false)
    cookieHandler()
  }

  return {user, loggedIn, error, userSignin, userSignup, userLogout, clearError}
}

export { useAccountManagement }