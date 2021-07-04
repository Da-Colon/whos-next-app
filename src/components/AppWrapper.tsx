import React, { FC } from 'react'

const AppWrapper: FC<{children: JSX.Element[]}> = ({ children }) => {
  return (
    <div className="container relative max-w-256">
      { children }
    </div>
  )
}

export default AppWrapper