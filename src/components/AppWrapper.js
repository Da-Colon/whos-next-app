import React from 'react'

const AppWrapper = ({ children }) => {
  return (
    <div className="container relative">
      { children }
    </div>
  )
}

export default AppWrapper