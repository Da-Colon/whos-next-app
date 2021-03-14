import React from 'react'

const Section = ({ children}) => {
  return (
    <div className="mt-4 sm:mb-24 p-4 relative min-h-64 sm:h-64" >
      { children }
    </div>
  )
}


export default Section