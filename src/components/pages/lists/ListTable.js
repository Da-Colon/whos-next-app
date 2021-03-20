import React, { useEffect, useState } from 'react'
import ListItem from './components/ListItem'

const ListTable = ({length, list, setFieldValue}) => {
  const [ listOfNames, setList ] = useState([])

  useEffect(() => {
    setList(list || new Array(parseInt(length)).fill({name: ""}) || [])
    setFieldValue('list', list || new Array(parseInt(length)).fill({name: ""}) || [])
  }, [ list, length, setFieldValue ])

  const handleChange = (e, i) => {
    e.preventDefault()
    const text = e.target.value
    const newList = [...listOfNames]
    newList[i] = {name: text}
    setList(newList)
    setFieldValue('list', newList)
  }

  const handleRemove = (e, i) => {
    e.preventDefault()
    const newList = [...listOfNames]
    newList.splice(i, 1)
    setList(newList)
    setFieldValue('list', newList)
    setFieldValue('length', newList.length)
  }

  return (
    <div className="flex gap-8 justify-center flex-wrap mt-8">
      {listOfNames.map((listItem, i) => (
        <ListItem key={i} listItem={listItem} i={i} handleChange={handleChange} handleRemove={handleRemove}/>
      ))}
    </div>
  )
}

export default ListTable