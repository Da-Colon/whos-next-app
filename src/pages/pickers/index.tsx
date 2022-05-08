import { Route, useParams } from "react-router";
import PickerComponent from "../../components/picker";
import PickerWrapper from "./PickerWrapper";
import useRandomPicker from "../../components/picker/useRandomPicker";
import { useListStore } from "../../context/ListContext";
import { Routes } from "../../config/client";
import { ListsStore } from "../../context/typescript/lists.types";

const PickersContainer = () => {
  const { listId } = useParams<{ listId: string }>();
  const listsStore: ListsStore = useListStore();
  const list = listsStore.userLists?.find((list) => listId === list.id);
  const RandomPicker = useRandomPicker(list?.list || []);
  if (!list) {
    return <div>...</div>;
  }

  // routing here:
  // persistant list: updates database on each pick so current state of list is saved
  // non-persistant list: default mode; list is reset every
  return (
    <PickerWrapper {...RandomPicker} list={list}>
      <Route path={Routes.PickerStandard}>
        <PickerComponent list={list} RandomPicker={RandomPicker} />
      </Route>
      <Route path={Routes.PickerPersistant} />
    </PickerWrapper>
  );
};

export default PickersContainer;
