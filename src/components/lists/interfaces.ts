import { ChangeEvent } from "react";


export interface IListTableProps {
  length: number;
  list?: object[];
  values?: {};
  setFieldValue: (field: string, value: Array<any> | number) => void;
}

export interface IListItemProps {
  handleChange: (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  handleRemove: (
    index: number
  ) => void;
  listItem: { name: string };
  index: number;
}
