import { IListDetails } from "../../context/ListContext/interfaces";
import { IPickerStateTypes, IUseRandomPickerProps } from "./interfaces";
import ScatterTypePicker from "./Scatter";

const Picker = ({ RandomPicker, ...rest }: { list: IListDetails, RandomPicker: IUseRandomPickerProps }) => {
  switch (RandomPicker.pickerType) {
    case IPickerStateTypes.Scatter:
      return <ScatterTypePicker {...RandomPicker} {...rest} />;
    default:
      return <div>Should not see this</div>
  }
};

export default Picker;
