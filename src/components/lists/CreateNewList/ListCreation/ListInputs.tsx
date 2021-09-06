import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IList } from "../../../../context/ListContext/interfaces";

interface IListInputs {
  list: IList[];
  updateIndexOnChange: (name: string, index: number) => void;
  removeItemAtIndex: (index: number) => void;
}

const ListInputs = ({ list, updateIndexOnChange, removeItemAtIndex }: IListInputs) => {
  return (
    <div className="list-create-inputs-container">
      {list.map((listItem: IList, index: number) => (
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
