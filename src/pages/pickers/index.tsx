import { Route, useParams } from "react-router";
import PickerComponent from "../../components/picker";
import useRandomPicker from "../../components/picker/useRandomPicker";
import { IListStore, useListData } from "../../context/ListContext";
import "./styles.scss";

const PickersContainer = () => {
  const listsStore: IListStore = useListData();
  const { listId } = useParams<{ listId: string }>();
  const list = listsStore.userLists?.find((list) => listId === list.id);
  const RandomPicker = useRandomPicker(list?.list || []);
  if (!list) {
    return <div>...</div>;
  }
  // routing here:
  // persistant list: updates database on each pick so current state of list is saved
  // non-persistant list: default mode; list is reset every
  return (
    <div className="picker-container">
      <Route path="/picker/standard">
        <PickerComponent list={list} RandomPicker={RandomPicker} />
      </Route>
      {/* <Route path={`/picker/persistant`} /> */}
    </div>
  );
};

export default PickersContainer;
