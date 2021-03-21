import React from 'react'
import Wheel from './Wheel'


const RandomPicker = ({ list }) => {

  return (
    <div className="mt-16 flex justify-center">
      <Wheel items={list} />
    </div>
  )
}

export default RandomPicker