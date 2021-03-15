import React from 'react'
import classnames from 'classnames'

const BASE_DEFAULT = 'my-1'
const HEIGHT = {
  default: '1.2rem'
}

const Input = ({ height }) => {
  return (
    <input type="text" className={classnames(BASE_DEFAULT)} style={{ height: HEIGHT[height] }} />
  )
}

// Input.defaultProps = {
//   height: 'default'
// }

export default Input