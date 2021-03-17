import React from 'react'
import classnames from 'classnames'

const BASE_DEFAULT = 'text-gold font-semibold tracking-wide'
const BASE_RADIO = 'text-sm text-ghost_white font-semibold tracking-wide'

const Label = ({text, varient, addClassnames, children, ...rest}) => {
  if(varient === 'radio') {
    return (
      <label className={classnames(BASE_RADIO, addClassnames)} {...rest}>
        { children }
        <span className="ml-2">{ text }</span>
      </label> 
    )
  } else return (
    <label className={classnames(BASE_DEFAULT, addClassnames)} {...rest}>
      { text }
    </label> 
  )
}

export default Label