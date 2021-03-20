import React, { useEffect, useState } from 'react'
import Button from '../../layout/Button'
import Heading from '../../layout/Heading'
import Input from '../../layout/Input'
import Label from '../../layout/Label'
import ListTable from './ListTable'

const FlexContainer = ({varient, children, ...rest}) => {
  if(varient === 'justify') return <div className="flex items-center justify-around" {...rest} > { children } </div>
  else return <div className="flex items-center" {...rest}>{ children }</div>
}

const Container = ({ children }) => <div className="mt-8">{ children } </div>

const CreateList = ({values, handleChange, errors, setFieldValue }) => {
  const [ listLength, setLength ] = useState(0)
  const [ btnText, setText ] = useState('Generate List')

  useEffect(() => { if(listLength) setText('Change Length')}, [ listLength ])

  return (
    <Container>
      {/* Change selection goes here, should reset all values*/}
      <Heading varient="heading-two" label="Enter count" />
      <FlexContainer varient="justify">
        <FlexContainer>
          <Label text="Count:" addClassnames="mr-2" htmlFor="length"/>
          <Input type="number" maxLength="2" name="length" value={values.length} onChange={handleChange} />
        </FlexContainer>
        <Button type="button" varient="form" label={btnText} onClick={() => setLength(values.length)} width="fit" addClassnames="px-2" isDisabled={listLength === 0}/>
      </FlexContainer>
      <FlexContainer varient="justify" style={{marginTop: '2rem'}}>
        <Button type="submit" varient="form" label="Create list" addClassnames="bg-light_green" isDisabled={!values.list.length} />
      </FlexContainer>
      <ListTable length={listLength} setFieldValue={setFieldValue} values={values} />
    </Container>
  )
}

export default CreateList