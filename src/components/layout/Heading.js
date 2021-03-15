import React from 'react'
import classnames from 'classnames'

const BASE_DEFAULT = 'text-lg text-white font-bold leading-6 my-4'

const Heading = ({varient, label, addClasses, ...rest}) => {
  if(varient === 'heading-one') {
    return (
      <div className={classnames(BASE_DEFAULT, addClasses)}>
        { label }
      </div>
    )
  } else {
    return (
      <div>

      </div>
    )
  }
}

export default Heading