import { IListDetails } from "../../../context/ListContext/interfaces";
import ListActionButtons from "./ListsActionButtons";

const List = ({ name }: { name: string }) => {
  return (
    <div className="list-container">
      <div>{name}</div>
    </div>
  );
};

const ListCard = ({ list, isUserLists }: { list: IListDetails, isUserLists?: boolean }) => {
  return (
    <div className="lists-card">
      <div className="lists-card-name">{list.name}</div>
      <div className="lists-card-body">
        <div className="lists-card-container">
          {list.list.map((listItem, index) => (
            <List key={`${listItem.name}${index}`} name={listItem.name} />
          ))}
        </div>
        <div className="lists-card-view-actions">
          <ListActionButtons list={list} isUserLists={isUserLists} />
        </div>
      </div>
    </div>
  );
};

const ListsCardView = ({ lists, ...rest }: { lists: IListDetails[], isUserLists?: boolean }) => {
  return (
    <div className="lists-card-view">
      {lists.map((list) => (
        <ListCard key={list.id} list={list} {...rest}/>
      ))}
    </div>
  );
};

export default ListsCardView;
