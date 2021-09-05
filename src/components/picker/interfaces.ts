import { IList } from "../../context/ListContext/interfaces";

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
  currentItems: IList[];
  removedItems: IList[];
  pickedItem: IList | null;
  currentPickerItems: IList[];
  pickerType: IPickerTypesState;
  pickerView: IPickerViewState
  updatePickerType: (type: IPickerTypesState) => void;
  updatePickerView: (type: IPickerViewState) => void;
  randomPickerScatterInit: () => void;
  moveToSelected: (removeIndex: number) => void;
  moveToUnselected: (removeIndex: number) => void;
}