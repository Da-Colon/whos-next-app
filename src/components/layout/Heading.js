import React from 'react'
import classnames from 'classnames'

const BASE_DEFAULT = 'text-lg text-white font-bold leading-6 my-4'
const BASE_HEADING_TWO = 'text-md text-ghost_white font-bold leading-6 my-4'

const Heading = ({varient, label, addClasses, ...rest}) => {
  if(varient === 'heading-one') {
    return (
      <div className={classnames(BASE_DEFAULT, addClasses)}>
        { label }
      </div>
    )
  } else if(varient === 'heading-two') {
    return (
      <div className={classnames(BASE_HEADING_TWO, addClasses)}>
        { label }
      </div>
    )
  } else {
    return (
      <div className={classnames(BASE_DEFAULT, addClasses)}>
        { label }
      </div>
    )
  }
}

export default Heading