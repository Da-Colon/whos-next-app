import React from 'react'

const ButtonContainer = ({ show, children }) => {
  if(show) return ''
  else return (
    <div className="flex flex-col sm:flex-row sm:justify-center items-center my-8 gap-4">
      { children }
    </div>
  )
}

export default ButtonContainer