import React, { useEffect, useState } from 'react'
import Input from '../../../layout/Input'
import removeIcon from '../../../assets/images/remove.svg'

const ListItem = ({handleChange, handleRemove, listItem, i}) => {
  const [ itemName, setName ] = useState(listItem)
  
  useEffect(() => {
    setName(listItem.name)
  }, [listItem])
  return (
    <div className="flex flex-grow border border-ghost_white text-sm rounded-md relative max-w-xs">
      <div className="absolute flex item-center right-2 mt-1 -mr-1 border border-ghost_white p-1 cursor-pointer" onClick={handleRemove}><img alt="" className="w-2" src={removeIcon} /></div>
      <div className="border-r border-white py-1 w-8 bg-black text-ghost_white text-center rounded-l-md">
        {i + 1}
      </div>
      <Input 
        type="text" 
        className="pl-4 pr-8 py-1 w-full bg-black text-ghost_white rounded-r-md focus:outline-none" 
        height="full" 
        name="listItem" 
        value={itemName} 
        onChange={(e) => handleChange(e, i)} 
        placeholder="Enter name..."/>

    </div>
  )
}

export default ListItem