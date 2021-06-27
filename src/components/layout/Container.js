import React from 'react'
import classnames from 'classnames'

const BASE = "flex flex-col mt-8 pt-8 background-main inset-shadow mb-8"
const BASE_NO_MIN_HEIGHT = "flex flex-col p-8 pt-4 background-main inset-shadow"
const Container = ({ padTop, position, variant, children }) => {
  if(variant === 'noMinHeight') {
    return (
      <div className={classnames(BASE_NO_MIN_HEIGHT, position) }>
        {children}
      </div>
    )
  } else return (
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