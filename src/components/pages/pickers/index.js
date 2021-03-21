import React from 'react'
import list from './mockList.json'
import RandomPicker from './RandomPIcker'

const PickersContainer = () => {
  return (
    <div className="w-full">
      <RandomPicker list={list.data} />
    </div>
  )
}

export default PickersContainer