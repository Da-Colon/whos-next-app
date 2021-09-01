import { IListDetails } from "../../../context/ListContext/interfaces";
import ListActionButtons from "./ListActionButtons";

const ListsTableRow = ({ list, isUserLists }: { list: IListDetails, isUserLists?: boolean }) => {
  return (
    <div className="lists-table-row">
      <div>{list.name}</div>
      <div>{list.isPrivate ? "Yes" : "No"}</div>
      <div>{list.likes}</div>
      <div>{list.list.length}</div>
      <div className="lists-table-actions">
        <ListActionButtons list={list} isUserLists={isUserLists}/>
      </div>
    </div>
  );
};

const ListsTableBody = ({
  lists,
  isUserLists
}: {
  lists: IListDetails[];
  isUserLists?: boolean;
}) => {
  if (!lists.length) {
    return <div className="lists-table-none">No lists to display...</div>;
  }
  return (
    <div className="lists-table-body">
      {lists.map((list, index) => (
        <ListsTableRow key={`${list.id},${index}`} list={list} isUserLists={isUserLists}/>
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

const ListsTableView = ({
  lists,
  ...rest
}: {
  lists: IListDetails[];
  isUserLists?: boolean;
}) => {
  return (
    <div className="lists-table-view">
      <ListsTableHeader />
      <ListsTableBody lists={lists} {...rest} />
    </div>
  );
};

export default ListsTableView;
