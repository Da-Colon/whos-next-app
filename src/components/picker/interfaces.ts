import { IList } from "../../context/ListContext/interfaces";

export enum IPickerStateTypes {
  Scatter,
  Rain,
  Wheel,
  Bounce,
  Banner,
  StraightUp,
}

export interface IUseRandomPickerProps {
  currentItems: IList[];
  removedItems: IList[] | null;
  pickedItem: IList | null;
  currentPickerItems: IList[];
  pickerType: IPickerStateTypes;
  updatePickerType: (type: IPickerStateTypes) => void;
  randomPickerScatterInit: () => void;
}

