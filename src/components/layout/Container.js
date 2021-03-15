import React from 'react'
import classnames from 'classnames'

const BASE = "flex flex-col mt-8 pt-8 background-main inset-shadow"
const Container = ({ padTop, position, children }) => {
  return (
    <div className={classnames(BASE, position)} style={{minHeight: `calc(100vh - ${padTop}`}}>
      {children}
    </div>
  )
}

Container.defaultProps = {
  padTop: '12rem',
  position: 'items-center'
}

export default Container