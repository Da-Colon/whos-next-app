import React from 'react'

const CreateList = ({ listType }) => {
  if(listType === 'create') {
    return (
      <div>

      </div>
    )
  }
  if(listType === 'upload') {
    return (
      <div>

      </div>
    )
  } else return ''
}

export default CreateList