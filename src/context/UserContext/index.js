import { createContext, useContext} from 'react'
import { useAccountManagement } from './useAccountManagement'
let context

const createDataRoot = () => {
  context = createContext()
  context.displayName = 'Data Provider'
  const Provider = context.Provider
  
  return ({ children }) => {
    const { user, loggedIn, error, userSignin, userSignup, userLogout, clearError } = useAccountManagement()

    const dataContext = {
      user, loggedIn, error, 
      userSignin, userSignup, userLogout, clearError
    }

    return <Provider value={dataContext}>{children}</Provider>
  }
}

const UserProvider = createDataRoot()

const useUserData = () => {
  return useContext(context)
}

export { UserProvider, useUserData }