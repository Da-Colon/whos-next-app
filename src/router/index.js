import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'

const AppRouter = ({ children }) => {
  return (
    <Router>
      {children}
    </Router>
  )
}

export default AppRouter