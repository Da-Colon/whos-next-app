import React from 'react'
import { Route } from 'react-router-dom'
import Landing from '../components/pages/landing'
import ListsPage from './pages/lists'
import LoginPage from './pages/login'
import PickersContainer from './pages/pickers'
import SignupPage from './pages/signup'

const Body = ({ cookieHandler }) => {
  return (
      <div className="px-6" style={{minHeight: 'calc(100vh - 7rem'}}>
          <Route path="/" component={Landing} exact />
          <Route path="/login" exact >
            <LoginPage cookieHandler={cookieHandler} />
          </Route>
          <Route path="/signup" exact>
            <SignupPage cookieHandler={cookieHandler}/>
          </Route>
          <Route path="/lists" component={ListsPage} />
          <Route path="/picker" component={PickersContainer} />
      </div>
  )
}

export default Body