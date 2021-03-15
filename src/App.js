import React from 'react'
import './index.css'
import AppWrapper from './components/AppWrapper'
import Header from './components/header'
import Body from './components/Body'
import Footer from './components/Footer'
import AppRouter from './router'


function App() {

  return (
    <AppRouter>
      <AppWrapper>
        <Header />
        <Body />
        <Footer />
      </AppWrapper>
    </AppRouter>
  )
}

export default App