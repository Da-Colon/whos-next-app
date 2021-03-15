import React from 'react'
import classnames from 'classnames'

const BASE_DEFAULT = 'text-gold font-semibold tracking-wide'

const Label = ({text, ...rest}) => {
  return (
    <label className={classnames(BASE_DEFAULT)} {...rest}>
      { text }
    </label> 
  )
}

export default Label