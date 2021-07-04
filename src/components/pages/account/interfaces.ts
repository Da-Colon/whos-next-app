import { FormEventHandler } from "react";

export interface IFormProperties {
  email: string;
  password: string;
}

export interface IAccountFormProps {
  values: IFormProperties;
  errors: IFormProperties;
  touched: IFormProperties;
  handleSubmit: FormEventHandler<HTMLFormElement>;
  handleChange: () => void;
}
