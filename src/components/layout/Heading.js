import React from 'react'
import classnames from 'classnames'

const HEADING_VARIANT = {
  one: 'text-2xl text-white font-bold leading-6 my-4 tracking-wider',
  two: 'text-lg text-ghost_white font-bold leading-6 my-4'
}

const Heading = ({variant, label, addClasses, ...rest}) => {
    return (
      <div className={classnames(HEADING_VARIANT[variant], addClasses)}>
        { label }
      </div>
    )
}

export default Heading