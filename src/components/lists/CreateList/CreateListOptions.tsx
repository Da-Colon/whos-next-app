import { FC } from 'react'
import ListCustom from './ListCustom'
import ListUpload from './ListUpload'
import { EListsTypes, ICreateListContainerProps } from '../enums'

const CreateListOptions: FC<ICreateListContainerProps> = ({ variant, ...rest }) => {
  switch(variant){
    case EListsTypes.create:
      return <ListCustom {...rest} />
    case EListsTypes.upload:
      return <ListUpload {...rest} />
    default:
      return <></>
  }
}

export default CreateListOptions