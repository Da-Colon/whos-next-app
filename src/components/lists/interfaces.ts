import { ChangeEvent } from "react";
import { IListProperties, IListPropertiesError } from "../../context/ListContext/interfaces";

export interface IListTableProps {
  length: number;
  list?: object[];
  values?: {};
  setFieldValue: (field: string, value: Array<any> | number) => void;
}

export interface IListItemProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>, index: number) => void;
  handleRemove: (index: number) => void;
  listItem: { name: string };
  index: number;
}

export interface ICreateListProperties {
  name: string;
  isPrivate: boolean;
  list: { name: string }[];
}

export interface IFormikProps {
  values: IListProperties;
  errors: IListPropertiesError;
  handleChange: () => void;
  handleSubmit?: () => void;
  setFieldValue: (field: string, value: Array<any> | number | boolean) => void;
  resetForm: () => void;
}
