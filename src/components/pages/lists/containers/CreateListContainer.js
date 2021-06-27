import React from 'react'
import CreateList from '../CreateList'
import UploadList from '../UploadList'

const CreateListContainer = ({ variant, ...rest }) => {
  if(variant === 'create') {
    return (
      <CreateList {...rest} />
    )
  }
  if(variant === 'upload') {
    return (
      <UploadList {...rest} />
    )
  } else return ''
}

export default CreateListContainer