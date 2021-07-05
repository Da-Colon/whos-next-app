import React, { FC } from 'react'
import classnames from 'classnames'
import { ILabel } from './interfaces'

const BASE_RADIO = 'text-md text-ghost_white font-semibold tracking-wide'

const RadioLabel: FC<ILabel> = ({text, addClasses, children, ...rest}) => (
  <label className={classnames(BASE_RADIO, addClasses)} {...rest}>
    { children }
    <span className="ml-2">{ text }</span>
  </label>
)

export default RadioLabel