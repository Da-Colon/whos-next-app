import React from 'react'
import classnames from 'classnames'

const BASE = "w-full flex items-center justify-between whitespace-nowrap my-2 md:80"

const FieldContainer = ({ addClassnames, children, ...rest }) => {
  return (
    <div className={classnames(BASE, addClassnames)} {...rest} >
      { children }
    </div>
  )
}

export default FieldContainer