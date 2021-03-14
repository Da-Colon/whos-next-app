import React from 'react'

const AppWrapper = ({ children }) => {
  return (
    <div className="container relative max-w-128 ">
      { children }
    </div>
  )
}

export default AppWrapper