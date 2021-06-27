import React from 'react'
import ListCard from '../../layout/ListCard'

const ListsCreated = () => {
  return (
    <div className="flex mt-8">
      <ListCard title="selected" />
      <ListCard title="Add List" variant="new" />
    </div>
  )
}

export default ListsCreated