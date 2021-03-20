import React from 'react'
import classnames from 'classnames'

const BASE_DEFAULT = 'my-1 pl-4 focus:outline-none'
const BASE_RADIO = 'focus:outline-none'
const BASE_NUMBER = 'w-8 my-1 pl-2 focus:outline-none'


const HEIGHT = {
  default: '1.4rem',
  full: '100%'
}

const Input = ({ height, type, addClassnames, ...rest }) => {
  if(type === 'number') {
    return (
      <input type="text" patther="\d*" maxLength="2" className={classnames(BASE_NUMBER, addClassnames)} style={{ height: HEIGHT[height] }}  {...rest} />
    )
  }
  if(type === 'radio') {
    return (
      <input type={type} className={classnames(BASE_RADIO, addClassnames)} style={{ height: HEIGHT[height] }} {...rest} />
    )
  }
  return (
    <input type={type} className={classnames(BASE_DEFAULT, addClassnames)} style={{ height: HEIGHT[height] }} {...rest} />
  )
}

Input.defaultProps = {
  height: 'default',
  type: 'text',
}

export default Input