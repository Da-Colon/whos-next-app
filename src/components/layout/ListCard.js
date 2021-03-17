import React from 'react'
import classnames from 'classnames'
import plusSign from '../assets/images/plusSign.svg'
import { NavLink } from 'react-router-dom'

const CONTAINER = 'border-2 shadow-card my-4 relative mr-8 z-10'
const TAB = 'absolute top-0 -mt-6 z-0 px-2 border-t border-l border-r border-black text-gold text-sm'
const IMAGE_CONTAINER = 'w-full h-full box-border p-4'

const ListCard = ({title, varient}) => {
  if(varient === 'new') {
    return (
      <NavLink to={'/lists/new'} className={classnames(CONTAINER, 'cursor-pointer')} style={{width: '12rem', height: '8rem'}}>
        {title && (
          <div className={classnames(TAB)} >{title}</div>
        )}
        <div className={classnames(IMAGE_CONTAINER)} >
          <img alt="" src={plusSign} className="w-full h-full" />
        </div>
      </NavLink>
    ) 
  }
  return (
    <div className={classnames(CONTAINER)} style={{width: '12rem', height: '8rem'}}>
      {title && (
        <div className={classnames(TAB)} >{title}</div>
      )}
    </div>
  )
}

export default ListCard