import React from 'react'

const FieldsContainer = ({ children }) => {
  return (
    <div className="flex flex-col w-full md:flex-row md:justify-between md:gap-32 md:px-8">
      { children }
    </div>
    )
}

export default FieldsContainer