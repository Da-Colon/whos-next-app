import React from 'react'
import classnames from 'classnames'

const BASE_DEFAULT = 'my-1 pl-4'
const BASE_RADIO = ''


const HEIGHT = {
  default: '1.4rem'
}

const Input = ({ height, type, addClassnames, ...rest }) => {
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