import React from 'react'
import { Route } from 'react-router-dom'
import Landing from '../components/pages/landing'
import LoginPage from './pages/login'
import SignupPage from './pages/signup'

const Body = () => {
  return (
      <div className="px-6" style={{minHeight: 'calc(100vh - 7rem'}}>
          <Route path="/" component={Landing} exact />
          <Route path="/login" component={LoginPage} exact />
          <Route path="/signup" component={SignupPage} exact />
          <Route path="/classes" />
          <Route path="/picker" />
      </div>
  )
}

export default Body