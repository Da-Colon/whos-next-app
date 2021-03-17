import React from 'react'
import Button from '../../layout/Button'
import Heading from '../../layout/Heading'
import Input from '../../layout/Input'
import Label from '../../layout/Label'

const FlexContainer = ({varient, children}) => {
  if(varient === 'justify') return <div className="flex items-center justify-around"> { children } </div>
  else return <div className="flex items-center">{ children }</div>
}

const Container = ({ children }) => <div className="mt-8">{ children } </div>

const CreateList = () => {
  return (
    <Container>
      {/* Change selection goes here, should reset all values*/}
      <Heading varient="heading-two" label="Enter count" />
      <FlexContainer varient="justify">
        <FlexContainer>
          <Label text="Count:" addClassnames="mr-2" />
          <Input type="number" maxLength="2" />
        </FlexContainer>
        <Button type="menu" varient="form" label="Create List"/>
      </FlexContainer>
    </Container>
  )
}

export default CreateList