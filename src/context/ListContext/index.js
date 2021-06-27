import { createContext, useContext} from 'react'
let context

const createDataRoot = () => {
  context = createContext()
  context.displayName = 'Data Provider'
  const Provider = context.Provider
  
  return ({ children }) => {
    const dataContext = {
     
    }

    return <Provider value={dataContext}>{children}</Provider>
  }
}

const ListProvider = createDataRoot()

const useListData = () => {
  return useContext(context)
}

export { ListProvider, useListData }