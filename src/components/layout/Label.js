import React from 'react'
import classnames from 'classnames'

const BASE_DEFAULT = 'text-gold font-bold tracking-wide text-lg tracking-wider'
const BASE_RADIO = 'text-13 text-ghost_white font-semibold tracking-wide'

const Label = ({text, addClasses, children, ...rest}) => (
    <label className={classnames(BASE_DEFAULT, addClasses)} {...rest}>
      { text }
    </label> 
  )


export const RadioLabel = ({text, addClasses, children, ...rest}) => (
  <label className={classnames(BASE_RADIO, addClasses)} {...rest}>
    { children }
    <span className="ml-2">{ text }</span>
  </label>
)

export default Label