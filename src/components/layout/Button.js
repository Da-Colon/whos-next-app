import classnames from 'classnames'
import React from 'react'
import { NavLink } from 'react-router-dom'

const BUTTON_VARIANTS = {
  menu: 'background-main rounded-lg text-md font-bold text-white tracking-wide focus:outline-none',
  form: 'rounded-lg text-md font-bold tracking-wide text-white focus:outline-none',
  none: ''
}

const HOVER_VARIANTS = {
  menu: 'transform hover:-translate-x-2 hover:-translate-y-1 hover:shadow-hover',
  form: 'transform hover:-translate-x-2 hover:-translate-y-1 hover:shadow-hover',
  none: ''
}

const DISABLED_VARIANTS = {
   form: 'rounded-lg text-md font-semibold bg-gray-200 text-ghost_white focus:outline-none cursor-default'
}


const HEIGHT = {
  default: '2rem',
  lg: '2.5rem'
}

const WIDTH = {
  default: '8rem',
  lg: '12rem',
  fit: 'fit-content'
}

const Button = ({label, variant, height, width, addClasses, isDisabled=false, ...rest}) => {
    return (
      <button 
        className={
          classnames(BUTTON_VARIANTS[variant], 
            HOVER_VARIANTS[variant], 
            {'background-main': !isDisabled},
            {'bg-gray-300': isDisabled},
            {[DISABLED_VARIANTS[variant]]: isDisabled},
            addClasses)} 
        disabled={isDisabled} 
        style={{height: HEIGHT[height], width: WIDTH[width]}} {...rest} >
        { label }
      </button>
    )
  }

export const ButtonLink = ({label, variant, height, width, addClasses, to, activeClassName, ...rest}) => {
  return (
    <NavLink to={to} activeClassName={activeClassName} >
        <button className={classnames(BUTTON_VARIANTS[variant], HOVER_VARIANTS[variant], addClasses)} style={{height: HEIGHT[height], width: WIDTH[width]}} {...rest} >
          { label }
        </button>
    </NavLink>
  )
}

const defaultProps = {
  variant: 'menu',
  height: 'default',
  width: 'default',
}

ButtonLink.defaultProps = defaultProps
Button.defaultProps = defaultProps

export default Button