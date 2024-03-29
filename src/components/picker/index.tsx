import { ListDetails } from "../../context/typescript/lists.types";
import { IPickerViewState, IUseRandomPickerProps } from "./interfaces";
import ScatterTypePicker from "./Scatter";
import "./styles.scss";

const Picker = ({ RandomPicker, ...rest }: { list: ListDetails; RandomPicker: IUseRandomPickerProps }) => {
  switch (RandomPicker.pickerView) {
    case IPickerViewState.Scatter:
      return (
        <div className="picker-container">
          <ScatterTypePicker {...RandomPicker} {...rest} />
        </div>
      );
    default:
      return <div>Should not see this</div>;
  }
};

export default Picker;
