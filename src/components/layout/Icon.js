import React from 'react'
import classnames from 'classnames'

const BASE_DEFAULT = 'w-6 mr-2 h-auto cursor-pointer'
const BASE_SMALL = 'w-6 mr-2 h-auto cursor-pointer'
const HOVER_SMALL = 'transform hover:-translate-x-2 hover:-translate-y-1 hover:shadow-hover'

const Icon = ({ icon, varient, onClickAction }) => {
  if(varient === 'small') {
    return (
      <div className={classnames(BASE_SMALL, HOVER_SMALL)} onClick={onClickAction}>
        <img src={icon} alt="" className="w-full h-full"/>
      </div>
    )
  } else {
    return (
      <div className={classnames(BASE_DEFAULT)} onClick={onClickAction}>
        <img src={icon} alt="" className="w-full h-full"/>
      </div>
    )
  }
}

Icon.defaultProps = {
  onClickAction: () => null
}

export default Icon