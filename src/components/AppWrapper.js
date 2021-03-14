import React from 'react'

const AppWrapper = ({ children }) => {
  return (
    <div className="container relative max-w-256">
      { children }
    </div>
  )
}

export default AppWrapper