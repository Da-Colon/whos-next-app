import { ChangeEvent, FC, useEffect, useState } from "react";
import Button from "../../layout/Button";
import {
  EButtonHoverVariants,
  EButtonVariants,
  EButtonWidths,
  EDisabledVariants,
} from "../../layout/Button/enums";
import Container, { EContainer } from "../../layout/Container";
import Input from "../../layout/Input";
import { EInputVariants } from "../../layout/Input/enums";
import Label from "../../layout/Label";
import TextContainer, { ETextContainer } from "../../layout/TextContainer";
import { ICreateListContainerProps } from "../enums";
import ListNameContainer from "./ListNameContainer";

const CreateList: FC<ICreateListContainerProps> = ({
  values,
  errors,
  setFieldValue,
}) => {
  const [listLength, setLength] = useState<number>(0);
  const [btnText, setText] = useState("Generate List");

  useEffect(() => {
    if (values.listLength) {
      setText("Change Length");
    }
  }, [values]);

  return (
    <Container addClasses="mt-8">
      {/* Change selection goes here, should reset all values*/}
      <TextContainer variant={ETextContainer.large} label="Enter count" />
      <Container
        variant={EContainer.flex}
        addClasses="items-center justify-around"
      >
        <Container variant={EContainer.flex} addClasses="items-center">
          <Label text="Count:" addClasses="mr-2" htmlFor="length" />
          <Input
            variant={EInputVariants.number}
            name="length"
            maxLength={2}
            value={listLength}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const value = e.target.value;
              if(value.charAt(0) === "0" && value.length === 2) {
                return setLength(Number(value.substr(1)))
              }
              return setLength(Number(e.target.value));
            }}
          />
        </Container>
        <Button
          variant={EButtonVariants.form}
          hoverVariant={EButtonHoverVariants.form}
          disabledVariant={EDisabledVariants.form}
          label={btnText}
          action={() => setFieldValue("listLength", listLength || 0)}
          width={EButtonWidths.fit}
          addClasses="px-4"
          isDisabled={!listLength}
        />
      </Container>
      <Container
        variant={EContainer.flex}
        addClasses="items-center justify-around"
        styles={{ marginTop: "2rem" }}
      >
        <Button
          type="submit"
          variant={EButtonVariants.form}
          hoverVariant={EButtonHoverVariants.form}
          disabledVariant={EDisabledVariants.form}
          label="Create list"
          addClasses="bg-light_green"
          isDisabled={false}
        />
      </Container>
      <ListNameContainer
        length={values.listLength}
        setFieldValue={setFieldValue}
        values={values}
      />
    </Container>
  );
};

export default CreateList;
