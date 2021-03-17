import React, { useState } from 'react'
import FormikContainer from '../../../services/FormikContainer'
import Container from '../../layout/Container'
import Heading from '../../layout/Heading'
import Input from '../../layout/Input'
import Label from '../../layout/Label'
import Button from '../../layout/Button'
import CreateList from './containers/CreateListContainer'
import FieldsContainer from './containers/FieldsContainer'
import FieldContainer from './containers/FieldContainer'
import ButtonContainer from './containers/ButtonContainer'

const Hero = ({ children }) => <div className="w-full px-8 box-border">{ children }</div>

const ListsNew = () => {
  const [ listType, setType ] = useState(false)
  return (
    <Hero>
      <Heading varient="heading-one" label="New List" />
      <FormikContainer>
        {({values, errors, handleSubmit, handleChange}) => (
          <React.Fragment>
            <Container varient="noMinHeight" position="items-start">
              <Heading varient="heading-two" label="General settings" />
              <FieldsContainer>
                <FieldContainer>
                  <Label text="List name:" htmlFor="name" addClassnames="mr-2" />
                  <Input name="name" id="name" addClassnames="max-w-xs" />
                </FieldContainer>
                <FieldContainer role="group" addClassnames="">
                  <Label text="Private?" />
                  <div className="flex ml-4">
                    <Label varient="radio" text="Yes" htmlFor="name" addClassnames="flex items-center mx-2">
                      <Input type="radio" name="public" id="name" value="true" />
                    </Label>
                    <Label varient="radio" text="No" htmlFor="name" addClassnames="flex items-center mx-2">
                      <Input type="radio" name="public" id="name" />
                    </Label>
                  </div>
                </FieldContainer>
              </FieldsContainer>
            </Container> 
            <ButtonContainer show={!!listType}>
              <Button varient="lg" height="lg" width="lg" label="Create" onClick={() => setType('create')} />
              <span className="text-white text-lg">or</span>
              <Button varient="lg" height="lg" width="lg" label="Upload" onClick={() => setType('upload')} />
            </ButtonContainer>
            <CreateList varient={listType} setType={setType} />
          </React.Fragment>
        )}
      </FormikContainer>
    </Hero>
  )
}

export default ListsNew