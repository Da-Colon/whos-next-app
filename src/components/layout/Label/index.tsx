import React, { FC } from 'react'
import classnames from 'classnames'
import { ILabel } from './interfaces'

const BASE_DEFAULT = 'text-gold font-bold tracking-wide text-lg tracking-wider'

const Label: FC<ILabel> = ({text, addClasses, children, ...rest}) => (
    <label className={classnames(BASE_DEFAULT, addClasses)} {...rest}>
      { text }
    </label> 
  )

export default Label