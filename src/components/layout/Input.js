import React from 'react'
import classnames from 'classnames'

const VARIANTS = {
  radio: 'focus:outline-none',
  number: 'w-8 my-1 pl-2 focus:outline-none',
  text: 'my-1 pl-3 font-semibold tracking-wider text-gray-800 focus:outline-none w-64'
}

const HEIGHT = {
  default: '2rem',
  full: '100%'
}

const Input = ({ height, type, variant, addClasses, ...rest }) => {
  return (
    <input type={type} className={classnames(VARIANTS[variant], addClasses)} style={{ height: HEIGHT[height] }} {...rest} />
  )
}

export const InputNumber = ({ height, variant, type, addClasses, ...rest }) => {
  return (
    <input type={type} patther="\d*" maxLength="2" className={classnames(VARIANTS[variant], addClasses)} style={{ height: HEIGHT[height] }}  {...rest} />
  ) 
}

const defaultProps = {
  height: 'default',
  type: 'text',
}

Input.defaultProps = defaultProps;
InputNumber.defaultProps = defaultProps;

export default Input