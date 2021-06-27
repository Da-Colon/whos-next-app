import React, { useState } from 'react'
import FormikContainer from '../../../services/FormikContainer'
import Container from '../../layout/Container'
import Heading from '../../layout/Heading'
import Input from '../../layout/Input'
import Label, { RadioLabel } from '../../layout/Label'
import Button from '../../layout/Button'
import CreateList from './containers/CreateListContainer'
import FieldsContainer from './containers/FieldsContainer'
import FieldContainer from './containers/FieldContainer'
import ButtonContainer from './containers/ButtonContainer'
import { listNewValidationSchema } from '../../../constants/validationSchemas'
import { listNewInitialValues } from '../../../constants/initialValues'

const Hero = ({ children }) => <div className="w-full px-8 box-border mb-8">{ children }</div>

const ListsNew = () => {
  const [ listType, setType ] = useState(false)
  return (
    <Hero>
      <Heading variant="one" label="New List" />
      <FormikContainer validationSchema={listNewValidationSchema} initialValues={listNewInitialValues}>
        {({values, errors, handleSubmit, handleChange, setFieldValue}) => (
          <form onSubmit={handleSubmit}>
            <Container variant="noMinHeight" position="items-start">
              <Heading variant="two" label="General settings" />
              <FieldsContainer>
                <FieldContainer>
                  <Label text="List name:" htmlFor="name" addClasses="mr-2" />
                  <Input variant="text" name="name" id="name" addClasses="max-w-xs" />
                </FieldContainer>
                <FieldContainer role="group" addClasses="">
                  <Label text="Private?" />
                  <div className="flex ml-4">
                    <RadioLabel text="Yes" htmlFor="name" addClasses="flex items-center mx-2">
                      <Input variant="radio" type="radio" name="public" id="name" value="true" />
                    </RadioLabel>
                    <Label variant="radio" text="No" htmlFor="name" addClasses="flex items-center mx-2">
                      <Input variant="radio" type="radio" name="public" id="name" />
                    </Label>
                  </div>
                </FieldContainer>
              </FieldsContainer>
            </Container> 
            <ButtonContainer show={!!listType}>
              <Button variant="lg" height="lg" width="lg" label="Create" onClick={() => setType('create')} />
              <span className="text-white text-20">or</span>
              <Button variant="lg" height="lg" width="lg" label="Upload" onClick={() => setType('upload')} />
            </ButtonContainer>
            <CreateList variant={listType} setType={setType} values={values} errors={errors} handleChange={handleChange} setFieldValue={setFieldValue} />
          </form>
        )}
      </FormikContainer>
    </Hero>
  )
}

export default ListsNew