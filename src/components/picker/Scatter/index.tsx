import { IList } from "../../../context/ListContext/interfaces";
import { randomNumberPicker } from "../picker.utils";
import { IUseRandomPickerProps } from "../interfaces";
import "./styles.scss";

const ScatterObject = ({ listItem }: { listItem: IList; index: number }) => {
  const textStyles = {
    left: randomNumberPicker(window.innerWidth).toString() + "px",
    top: randomNumberPicker(window.innerHeight).toString() + "px",
    transform: `rotate(${randomNumberPicker(180).toString() + "deg"})`,
    fontSize: `${randomNumberPicker(28).toString()}px`,
  };
  return (
    <div className="rain-text" style={textStyles}>
      {listItem.name}
    </div>
  );
};

const ScatterTypePicker = ({ currentPickerItems, randomPickerScatterInit }: IUseRandomPickerProps) => {
  // this component will need to:
  // todo pick random index to remove from unselected; this name will begin drop
  // todo if selected is less than 3 use entire list for UI Rain.
  // todo if list is less than 3 names; duplicate list for UI.

  if (!currentPickerItems) {
    // todo add loader
    <div>...</div>;
  }
  return (
    <div className="rain-container">
      {currentPickerItems.map((listItem, index) => (
        <ScatterObject key={`__${index}`} listItem={listItem} index={index} />
      ))}
    </div>
  );
};

export default ScatterTypePicker;
