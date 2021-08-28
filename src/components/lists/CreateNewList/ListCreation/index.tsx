import { faArrowCircleRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";
import { IListStore, useListData } from "../../../../context/ListContext";
import { ECreateListSteps, IList } from "../../../../context/ListContext/interfaces";
import { IListSteps } from "../../interfaces";
import "./styles.scss";

interface IListCreation extends IListSteps {
  listLength: number;
}

interface IListInputs {
  list: IList[];
  updateIndexOnChange: (name: string, index: number) => void;
  removeItemAtIndex: (index: number) => void;
}

const ListInputs = ({
  list,
  updateIndexOnChange,
  removeItemAtIndex,
}: IListInputs) => {
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

const ListCreation: FC<IListCreation> = ({
  errors,
  listLength,
  setFieldValue,
}) => {
  const listsStore: IListStore = useListData();
  const [newList, setNewList] = useState<IList[]>(
    new Array(listLength).fill({ name: "" })
  );

  const isListComplete = newList.reduce(
    (prev, cur) => (cur.name ? prev : prev + 1),
    0
  )
    ? false
    : true;

  const updateStateAndLoadReview = () => {
    setFieldValue('list', newList);
    listsStore.updateCreateListState(ECreateListSteps.Review)
  }

  const updateIndexOnChange = (name: string, index: number) => {
    const currentList: IList[] = [...newList];
    currentList[index] = { name: name };
    setNewList(currentList);
  };

  const removeItemAtIndex = (index: number) => {
    const currentList: IList[] = [...newList];
    const updatedList = currentList.filter((_, i) => index !== i);
    setNewList(updatedList);
  };
  return (
    <div className="list-creation-container">
      <div className="list-form-heading">Edit New List</div>
      <button className="next-step-button" onClick={updateStateAndLoadReview} disabled={!isListComplete}>
        <FontAwesomeIcon icon={faArrowCircleRight} />
        Review
      </button>
      <ListInputs
        updateIndexOnChange={updateIndexOnChange}
        removeItemAtIndex={removeItemAtIndex}
        list={newList}
      />
    </div>
  );
};

export default ListCreation;
