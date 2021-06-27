import React from 'react'
import classnames from 'classnames'

const BASE = "w-full flex items-center justify-between whitespace-nowrap my-2 md:80"

const FieldContainer = ({ addClasses, children, ...rest }) => {
  return (
    <div className={classnames(BASE, addClasses)} {...rest} >
      { children }
    </div>
  )
}

export default FieldContainer