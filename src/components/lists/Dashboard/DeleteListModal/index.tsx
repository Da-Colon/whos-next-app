import { IListStore, useListData } from "../../../../context/ListContext";
import "./styles.scss";

const DeleteListModal = () => {
  const listsStore: IListStore = useListData();

  const deleteList = async () => {
    if (!listsStore.deleteListId) return;
    const result: { message?: string; error?: string } =
      await listsStore.deleteList(listsStore.deleteListId);
    if (result.error) {
      // show error
      console.error(result)
    }
    // update screen
    listsStore.updateShowListDeleteModal(null)
    // load lists
    listsStore.loadLists()
  };
  if (!listsStore.deleteListId) {
    return null;
  }

  const list = listsStore.userLists?.find(
    (list) => list.id === listsStore.deleteListId
  ) || { name: "" };
  
  return (
    <div className="delete-list-modal">
      <div className="delete-list-modal-container">
        <div className="delete-list-modal-heading">
          Are you sure you want to delete list <span>`{list.name}`</span>?
        </div>
        <div className="delete-list-modal-actions">
          <button
            type="button"
            className="delete-list-modal-cancel"
            onClick={() => listsStore.updateShowListDeleteModal(null)}
          >
            Cancel
          </button>
          <button
            type="button"
            className="delete-list-modal-delete"
            onClick={deleteList}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteListModal;
