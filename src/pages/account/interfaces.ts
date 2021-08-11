import { FormEventHandler } from "react";

export interface IFormProperties {
  email: string;
  password: string;
}

export interface IListProperties {
    listLength: number,
    name: string,
    private: boolean,
    list: any[],
}

export interface IAccountFormProps {
  values: IFormProperties;
  errors: IFormProperties;
  touched: IFormProperties;
  handleSubmit: FormEventHandler<HTMLFormElement>;
  handleChange: () => void;
}
