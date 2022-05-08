import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ListProps } from "../../../../context/typescript/lists.types";

interface ListInputsProps {
  list: ListProps[];
  updateIndexOnChange: (name: string, index: number) => void;
  removeItemAtIndex: (index: number) => void;
}

const ListInputs = ({ list, updateIndexOnChange, removeItemAtIndex }: ListInputsProps) => {
  return (
    <div className="list-create-inputs-container">
      {list.map((listItem: ListProps, index: number) => (
        <div key={"_" + index} className="list-create-input">
          <input
            type="text"
            value={listItem.name}
            placeholder="..."
            maxLength={22}
            onChange={(event) => updateIndexOnChange(event.target.value, index)}
          />
          <button type="button" onClick={() => removeItemAtIndex(index)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListInputs;
