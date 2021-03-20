import React from 'react'
import CreateList from '../CreateList'
import UploadList from '../UploadList'

const CreateListContainer = ({ varient, ...rest }) => {
  if(varient === 'create') {
    return (
      <CreateList {...rest} />
    )
  }
  if(varient === 'upload') {
    return (
      <UploadList {...rest} />
    )
  } else return ''
}

export default CreateListContainer