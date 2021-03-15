import React from 'react'

const Container = ({ children }) => {
  return (
    <div className="flex flex-col mt-8 pt-8 items-center background-main inset-shadow" style={{minHeight: 'calc(100vh - 12rem'}}>
      {children}
    </div>
  )
}

export default Container