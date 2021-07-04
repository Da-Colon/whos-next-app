import { Dispatch, SetStateAction } from "react";

export enum EListsTypes {
  create,
  upload,
  none,
}

export interface ICreateListContainerProps {
  variant?: EListsTypes;
  setType: Dispatch<SetStateAction<EListsTypes>>;
  values: {};
  errors: {};
  handleChange: () => void;
  setFieldValue: (field: string, value: Array<any> | number) => void;
}
