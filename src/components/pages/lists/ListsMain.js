import React from 'react'
import Heading from '../../layout/Heading'
import ListsCreated from './ListsCreated'

const ListMain = () => {
  return (
    <div className="px-8">
      <Heading varient="heading-one" label="Created lists" />
      <ListsCreated />
      {/* TODO map out the rest of created lists */}
      {/* TODO sort by date created */}
      {/* TODO recent two with see all? */}
      <Heading varient="heading-one" label="Recently Uploaded (Public)" />
      {/* Future update */}
      {/* map out 'public' lists */}
      {/* sort by popularity */}
      {/* will need page to look through and sort */}
    </div>
  )
}

export default ListMain