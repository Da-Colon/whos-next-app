import { faHeart, faPencilAlt, faRuler, faTrash, faUserLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IListDetails } from "../../../context/ListContext/interfaces";

const ListsTableRow = ({ list }: { list: IListDetails }) => {
  return (
    <div className="lists-table-row">
      <div>{list.name}</div>
      <div>{list.private ? 'Yes' : 'No'}</div>
      <div>{list.likes}</div>
      <div>{list.list.length}</div>
      <div className="lists-table-actions">
        <FontAwesomeIcon icon={faHeart} className="lists-card-view-action" />
        <FontAwesomeIcon icon={faRuler} className="lists-card-view-action" />
        <FontAwesomeIcon icon={faUserLock} className="lists-card-view-action" />
        <FontAwesomeIcon icon={faPencilAlt} className="lists-card-view-action" />
        <FontAwesomeIcon icon={faTrash} className="lists-card-view-action" />
      </div>
    </div>
  );
};

const ListsTableBody = ({ lists }: { lists: IListDetails[] }) => {
  if(!lists.length) {
    return (
      <div className="lists-table-none">No lists to display...</div>
    )
  }
  return (
    <div className="lists-table-body">
      {lists.map((list, index) => (
        <ListsTableRow key={`${list.id},${index}`} list={list} />
      ))}
    </div>
  );
};

const ListsTableHeader = () => {
  return (
    <div className="lists-table-row lists-table-header">
      <div>Name</div>
      <div>Private?</div>
      <div>Likes</div>
      <div>Length</div>
      <div>Actions</div>
    </div>
  );
};

const ListsTableView = ({ lists }: { lists: IListDetails[] }) => {
  return (
    <div className="lists-table-view">
      <ListsTableHeader />
      <ListsTableBody lists={lists} />
    </div>
  );
};

export default ListsTableView;
