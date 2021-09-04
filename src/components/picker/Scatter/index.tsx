
import { IList } from "../../../context/ListContext/interfaces";
import { randomNumberPicker } from "../picker.utils";
import "./styles.scss";
import { IUseRandomPickerProps } from "../interfaces";

const ScatterTypePicker = ({currentPickerItems, randomPickerScatterInit}: IUseRandomPickerProps) => {

  // this component will need to:
  // todo pick random index to remove from unselected; this name will begin drop
  // todo if selected is less than 3 use entire list for UI Rain.
  // todo if list is less than 3 names; duplicate list for UI.

  if (!currentPickerItems) {
    // todo add loader
    return <div> <button onClick={randomPickerScatterInit}>Start Picker</button></div>;
  }
  return (
    <div className="rain-container">
      <button onClick={randomPickerScatterInit}>Run it again Start Picker</button>
      {currentPickerItems.map((listItem, index) => (
        <ScatterObject key={`__${index}`} listItem={listItem} index={index} />
      ))}
    </div>
  );
};

export default ScatterTypePicker;

const ScatterObject = ({
  listItem,
  index,
}: {
  listItem: IList;
  index: number;
}) => {
  return <div className="rain-text" style={{
    left: randomNumberPicker(400).toString() + 'px',
    top: randomNumberPicker(400).toString() + 'px',
    transform: `rotate(${randomNumberPicker(360).toString() + 'deg'})`
  }}>{listItem.name}</div>;
};
