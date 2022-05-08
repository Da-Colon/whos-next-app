import { ListProps } from "../../context/typescript/lists.types";

export enum IPickerViewState {
  Scatter,
  Rain,
  Wheel,
  Bounce,
  Banner,
  StraightUp,
}

export enum IPickerTypesState {
  One,
}

export interface IUseRandomPickerProps {
  currentItems: ListProps[];
  removedItems: ListProps[];
  pickedItem: ListProps | null;
  currentPickerItems: ListProps[];
  pickerType: IPickerTypesState;
  pickerView: IPickerViewState
  updatePickerType: (type: IPickerTypesState) => void;
  updatePickerView: (type: IPickerViewState) => void;
  randomPickerScatterInit: () => void;
  moveToSelected: (removeIndex: number) => void;
  moveToUnselected: (removeIndex: number) => void;
}