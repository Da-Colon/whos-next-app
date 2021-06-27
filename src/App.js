import React from 'react'
import './index.css'
import AppWrapper from './components/AppWrapper'
import Header from './components/header'
import Body from './components/Body'
import Footer from './components/Footer'
import AppRouter from './router'
import { useCookies } from 'react-cookie'


const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['token'])
  const setAuthTokenCookie = token => setCookie('token', token, { path: '/' })
  const removeAuthTokenCookie = () => removeCookie('token', { path: '/' })
  return (
    <AppRouter>
      <AppWrapper>
        <Header loggedIn={!!cookies.token} cookieHandler={removeAuthTokenCookie} />
        <Body loggedIn={!!cookies.token} cookieHandler={setAuthTokenCookie} />
        <Footer />
      </AppWrapper>
    </AppRouter>
  )
}

export default App