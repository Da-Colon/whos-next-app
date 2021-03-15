import React from 'react'
import classnames from 'classnames'

const BASE = "flex flex-col mt-8 pt-8 background-main inset-shadow"
const BASE_NO_MIN_HEIGHT = "flex flex-col p-8 pt-4 background-main inset-shadow"
const Container = ({ padTop, position, varient, children }) => {
  if(varient === 'noMinHeight') {
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