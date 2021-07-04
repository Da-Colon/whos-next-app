import React, { FC } from "react";
import Button from "../../../layout/Button";
import Input from "../../../layout/Input";
import Label from "../../../layout/Label";
import ErrorUI from "../../../layout/Errors";
import { IAccountFormProps } from "../interfaces";
import { EButtonVariants, EDisabledVariants } from "../../../layout/Button/enums";
import { EInputVariants } from "../../../layout/Input/enums";

const SignupForm: FC<IAccountFormProps> = ({
  values,
  errors,
  touched,
  handleSubmit,
  handleChange,
}) => {
  const buttonDisabled = () => (!values.email || !values.password) === true;
  return (
    <form
      className="p-4 mt-16 flex flex-col gap-2 w-1/2"
      onSubmit={handleSubmit}
    >
      <Label text="Email" htmlFor="email" />
      <Input
        type="text"
        variant={EInputVariants.text}
        name="email"
        id="email"
        onChange={handleChange}
        value={values.email}
      />
      <Label text="Password" htmlFor="password" />
      <Input
        type="password"
        variant={EInputVariants.text}
        name="password"
        id="password"
        onChange={handleChange}
        value={values.password}
      />
      {!!errors &&
        touched.email &&
        touched.password &&
        Object.values(errors).map((error) => (
          <ErrorUI key={error} error={error} />
        ))}
      <div className="text-right mt-4">
        <Button
          variant={EButtonVariants.form}
          disabledVariant={EDisabledVariants.form}
          type="submit"
          label="Signup"
          isDisabled={buttonDisabled()}
        />
      </div>
    </form>
  );
};

export default SignupForm;
