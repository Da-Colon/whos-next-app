import classnames from 'classnames'
import React from 'react'

const BACKGROUND_COLOR = 'radial-gradient(circle, rgba(22,167,162,1) 0%, rgba(25,61,73,1) 100%)'
const BASE_DEFAULT = ''
const BASE_MENU = 'bg-main rounded text-sm font-semibold text-gold'
const BASE_MENU_HOVER = 'transform hover:-translate-x-3 hover:-translate-y-1 hover:shadow-hover'

const HEIGHT = {
  default: '1.5rem'
}

const WIDTH = {
  default: '5rem'
}

const Button = ({label, varient, height, width, addClassnames, ...rest}) => {
  if(varient === 'menu') {
    return (
      <button className={classnames(BASE_MENU, BASE_MENU_HOVER, addClassnames)} style={{height: HEIGHT[height], width: WIDTH[width], background: BACKGROUND_COLOR}} {...rest} >
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