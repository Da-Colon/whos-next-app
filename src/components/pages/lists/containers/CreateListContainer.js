import React from 'react'
import CreateList from '../CreateList'
import UploadList from '../UploadList'

const CreateListContainer = ({ varient }) => {
  if(varient === 'create') {
    return (
      <CreateList />
    )
  }
  if(varient === 'upload') {
    return (
      <UploadList />
    )
  } else return ''
}

export default CreateListContainer