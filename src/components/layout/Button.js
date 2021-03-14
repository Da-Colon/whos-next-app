import classnames from 'classnames'
import React from 'react'

const BASE_DEFAULT = ''
const BASE_MENU = 'bg-white rounded text-sm'

const HEIGHT = {
  default: '1.5rem'
}

const WIDTH = {
  default: '4rem'
}

const Button = ({label, varient, height, width, addClassnames, ...rest}) => {
  if(varient === 'menu') {
    return (
      <button className={classnames(BASE_MENU, addClassnames)} style={{height: HEIGHT[height], width: WIDTH[width]}} {...rest} >
        { label }
      </button>
    )
  } else {
    return (
      <button className={classnames(BASE_DEFAULT, addClassnames)} style={{height: HEIGHT[height], width: WIDTH[width]}} {...rest} >
        { label }
      </button>
    )
  }
}

Button.defaultProps = {
  height: 'default',
  width: 'default'
}

export default Button