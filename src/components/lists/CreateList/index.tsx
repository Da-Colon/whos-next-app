import { FC, useState } from "react";
import { useHistory } from "react-router-dom";
import CreateListOptions from "./CreateListOptions";
import { EListsTypes } from "../enums";
import FormikContainer from "../../../services/FormikContainer";
import Input from "../../layout/Input";
import Label from "../../layout/Label";
import Button from "../../layout/Button";
import { EInputVariants } from "../../layout/Input/enums";
import RadioLabel from "../../layout/Label/RadioLabel";
import Container, { EContainer } from "../../layout/Container";
import TextContainer, { ETextContainer } from "../../layout/TextContainer";
import {
  EButtonHeights,
  EButtonHoverVariants,
  EButtonVariants,
  EButtonWidths,
  EDisabledVariants,
} from "../../layout/Button/enums";
import { listNewValidationSchema } from "../../../constants/validationSchemas";
import { listNewInitialValues } from "../../../constants/initialValues";
import { TVoidFunction } from "../../../constants/types";
import { IListProperties } from "../../../pages/account/interfaces";
import { useListData } from "../../../context/ListContext";
import { IUseLists } from "../../../context/ListContext/useLIsts";

const Hero: FC<{ children: JSX.Element[] }> = ({ children }) => (
  <div className="w-full px-8 box-border mb-8">{children}</div>
);

const ListsNew = () => {
  const [listType, setType] = useState(EListsTypes.none);
  const listServices: IUseLists = useListData();
  const history = useHistory()
  return (
    <Hero>
      <TextContainer variant={ETextContainer.large} label="New List" />
      <FormikContainer
        handleSubmit={(values: any) => listServices.saveList(values, history)}
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
          values: IListProperties;
          errors: IListProperties;
          touched: IListProperties;
          handleSubmit: TVoidFunction;
          handleChange: TVoidFunction;
          setFieldValue: (field: string, value: Array<any> | number) => void;
        }) => (
          <form onSubmit={handleSubmit}>
            <Container
              variant={EContainer.column}
              addClasses="items-start my-8 pl-8"
            >
              <TextContainer
                variant={ETextContainer.medium}
                label="General settings"
              />
              <Container variant={EContainer.fields}>
                <Container variant={EContainer.field}>
                  <Label text="List name:" htmlFor="name" addClasses="mr-2" />
                  <Input
                    variant={EInputVariants.text}
                    onChange={handleChange}
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
                  <Container addClasses="flex ml-4">
                    <Label htmlFor="public" addClasses="mr-2" text="Private?" />
                    <RadioLabel
                      text="Yes"
                      htmlFor="public"
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
            {listType === EListsTypes.none && (
              <Container
                variant={EContainer.flex}
                addClasses="justify-center items-center gap-8"
              >
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
            <CreateListOptions
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
