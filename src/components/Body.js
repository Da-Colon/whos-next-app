import React from 'react'
import { Route } from 'react-router-dom'
import AppRouter from './router'
import Landing from '../components/pages/landing'

const Body = () => {
  return (
      <div className="px-6" style={{minHeight: 'calc(100vh - 4rem'}}>
        <AppRouter>
          <Route path="/" component={Landing} exact />
        </AppRouter>
      </div>
  )
}

export default Body