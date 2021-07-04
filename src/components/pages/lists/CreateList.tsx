import React, { FC, useEffect, useState } from "react";
import Button from "../../layout/Button";
import { EButtonHoverVariants, EButtonVariants, EButtonWidths, EDisabledVariants } from "../../layout/Button/enums";
import Container, { EContainer } from "../../layout/Container";
import { EInputVariants } from "../../layout/Input/enums";
import InputNumber from "../../layout/Input/InputNumber";
import Label from "../../layout/Label";
import TextContainer, { ETextContainer } from "../../layout/TextContainer";
import { ICreateListContainerProps } from "./enums";
import ListTable from "./ListTable";

const CreateList: FC<ICreateListContainerProps> = ({ values, handleChange, errors, setFieldValue }) => {
  const [listLength, setLength] = useState(0);
  const [btnText, setText] = useState("Generate List");

  useEffect(() => {
    if (listLength) setText("Change Length");
  }, [listLength]);

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
          <InputNumber
            variant={EInputVariants.number}
            type="number"
            maxLength={2}
            name="length"
            value={Object.keys(values).length}
            action={handleChange}
          />
        </Container>
        <Button
          variant={EButtonVariants.form}
          hoverVariant={EButtonHoverVariants.form}
          disabledVariant={EDisabledVariants.form}
          label={btnText}
          action={() => setLength(Object.keys(values).length)}
          width={EButtonWidths.fit}
          addClasses="px-2"
          isDisabled={listLength === 0}
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
      <ListTable
        length={listLength}
        setFieldValue={setFieldValue}
        values={values}
      />
    </Container>
  );
};

export default CreateList;
