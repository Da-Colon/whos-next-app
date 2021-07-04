import React, { FC, useState } from "react";
import FormikContainer from "../../../services/FormikContainer";
import Container, { EContainer } from "../../layout/Container";
import Input from "../../layout/Input";
import Label from "../../layout/Label";
import RadioLabel from "../../layout/Label/RadioLabel";
import Button from "../../layout/Button";
import CreateList from "./CreateListContainer";
import { listNewValidationSchema } from "../../../constants/validationSchemas";
import { listNewInitialValues } from "../../../constants/initialValues";
import { EInputVariants } from "../../layout/Input/enums";
import TextContainer, { ETextContainer } from "../../layout/TextContainer";
import { EListsTypes } from "./enums";
import {
  EButtonHeights,
  EButtonHoverVariants,
  EButtonVariants,
  EButtonWidths,
  EDisabledVariants,
} from "../../layout/Button/enums";
import { IFormProperties } from "../account/interfaces";
import { TVoidFunction } from "../../../constants/types";

const Hero: FC<{ children: JSX.Element[] }> = ({ children }) => (
  <div className="w-full px-8 box-border mb-8">{children}</div>
);

const ListsNew = () => {
  const [listType, setType] = useState(EListsTypes.none);
  return (
    <Hero>
      <TextContainer variant={ETextContainer.large} label="New List" />
      <FormikContainer
        handleSubmit={() => null}
        validationSchema={listNewValidationSchema}
        initialValues={listNewInitialValues}
      >
        {({
          values,
          errors,
          handleSubmit,
          handleChange,
          setFieldValue,
        }: {
          values: IFormProperties;
          errors: IFormProperties;
          touched: IFormProperties;
          handleSubmit: TVoidFunction;
          handleChange: TVoidFunction;
          setFieldValue: (field: string, value: Array<any> | number) => void;
        }) => (
          <form onSubmit={handleSubmit}>
            <Container variant={EContainer.column} addClasses="items-start my-8">
              <TextContainer
                variant={ETextContainer.large}
                label="General settings"
              />
              <Container variant={EContainer.fields}>
                <Container variant={EContainer.field}>
                  <Label text="List name:" htmlFor="name" addClasses="mr-2" />
                  <Input
                    variant={EInputVariants.text}
                    name="name"
                    id="name"
                    addClasses="max-w-xs"
                  />
                </Container>
                <Container
                  variant={EContainer.field}
                  role="group"
                  addClasses=""
                >
                  <TextContainer addClasses="text-md" label="Private?" />
                  <Container addClasses="flex ml-4">
                    <RadioLabel
                      text="Yes"
                      htmlFor="name"
                      addClasses="flex items-center mx-2"
                    >
                      <Input
                        variant={EInputVariants.radio}
                        type="radio"
                        name="public"
                        id="name"
                        value="true"
                      />
                    </RadioLabel>
                    <RadioLabel
                      text="No"
                      htmlFor="name"
                      addClasses="flex items-center mx-2"
                    >
                      <Input
                        variant={EInputVariants.radio}
                        type="radio"
                        name="public"
                        id="name"
                      />
                    </RadioLabel>
                  </Container>
                </Container>
              </Container>
            </Container>
            {listType !== EListsTypes.none && (
              <Container>
                <Button
                  variant={EButtonVariants.form}
                  hoverVariant={EButtonHoverVariants.form}
                  disabledVariant={EDisabledVariants.form}
                  height={EButtonHeights.lg}
                  width={EButtonWidths.lg}
                  label="Create"
                  action={() => setType(EListsTypes.create)}
                />
                <span className="text-white text-20">or</span>
                <Button
                  variant={EButtonVariants.form}
                  hoverVariant={EButtonHoverVariants.form}
                  disabledVariant={EDisabledVariants.form}
                  height={EButtonHeights.lg}
                  width={EButtonWidths.lg}
                  label="Upload"
                  action={() => setType(EListsTypes.upload)}
                />
              </Container>
            )}
            <CreateList
              variant={listType}
              setType={setType}
              values={values}
              errors={errors}
              handleChange={handleChange}
              setFieldValue={setFieldValue}
            />
          </form>
        )}
      </FormikContainer>
    </Hero>
  );
};

export default ListsNew;
