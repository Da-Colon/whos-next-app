import React from 'react'

const Container = ({ children }) => {
  return (
    <div className="px-8 mx-auto mb-8 mt-0 hide-scrollbar" style={{minHeight: 'calc(100vh - 16rem)'}}>
      { children }
    </div>
  )
}

export default Container