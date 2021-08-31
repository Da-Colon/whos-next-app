import { IListDetails } from "../../../context/ListContext/interfaces";
import ListActionButtons from './ListActionButtons'

const ListsTableRow = ({ list }: { list: IListDetails }) => {
  return (
    <div className="lists-table-row">
      <div>{list.name}</div>
      <div>{list.isPrivate ? "Yes" : "No"}</div>
      <div>{list.likes}</div>
      <div>{list.list.length}</div>
      <div className="lists-table-actions">
        <ListActionButtons list={list} />
      </div>
    </div>
  );
};

const ListsTableBody = ({ lists }: { lists: IListDetails[] }) => {
  if (!lists.length) {
    return <div className="lists-table-none">No lists to display...</div>;
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
