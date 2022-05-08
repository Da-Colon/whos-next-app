import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useListStore } from "../../../../context/ListContext";
import { ECreateListSteps } from "../../../../context/typescript/lists.enums";
import { ListProps, ListsStore } from "../../../../context/typescript/lists.types";
import { IFormikProps } from "../../interfaces";
import TitleAndNavigation, { ENavigationType } from "../../shared/TitleAndNavigation";
import ListInputs from "./ListInputs";
import "./styles.scss";

interface ListCreationProps extends IFormikProps {
  listLength: number;
}

const ListCreation = ({ errors, listLength, values, setFieldValue }: ListCreationProps) => {
  const listsStore: ListsStore = useListStore();
  // stores new list as it's being created
  const [newList, setNewList] = useState<ListProps[]>(
    values.list.length ? values.list : new Array(listLength).fill({ name: "" })
  );

  // returns false if all available spaces are not filled
  const isListComplete = newList.reduce((prev, cur) => (cur.name ? prev : prev + 1), 0) ? false : true;

  // saves completed list into form state
  const updateStateAndLoadReview = () => {
    setFieldValue("list", newList);
    listsStore.updateCreateListState(ECreateListSteps.Review);
  };

  /**
   * @description change handler for list items
   * @param name text of list item
   * @param index index of list item to be updated
   */
  const updateIndexOnChange = (name: string, index: number) => {
    const currentList: ListProps[] = [...newList];
    currentList[index] = { name: name };
    setNewList(currentList);
  };

  /**
   * @description removes list item
   * @param index index of list item to be removed
   */
  const removeItemAtIndex = (index: number) => {
    const currentList: ListProps[] = [...newList];
    const updatedList = currentList.filter((_, i) => index !== i);
    setNewList(updatedList);
  };

  return (
    <div className="list-creation-container">
      <TitleAndNavigation
        pageTitle="Edit New List"
        backAction={() => listsStore.updateCreateListState(ECreateListSteps.CreationMethod)}
        variant={ENavigationType.State}
      />
      <button
        type="button"
        className="next-step-button"
        onClick={updateStateAndLoadReview}
        disabled={!isListComplete}
      >
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
