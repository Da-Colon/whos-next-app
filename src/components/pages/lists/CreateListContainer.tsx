import React, { FC } from 'react'
import CreateList from './CreateList'
import { EListsTypes, ICreateListContainerProps } from './enums'
import UploadList from './UploadList'

const CreateListContainer: FC<ICreateListContainerProps> = ({ variant, ...rest }) => {
  switch(variant){
    case EListsTypes.create:
      return <CreateList {...rest} />
    case EListsTypes.upload:
      return <UploadList {...rest} />
    default:
      return <></>
  }
}

export default CreateListContainer