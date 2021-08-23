import {
  faHandPointUp,
  faHeart,
  faPencilAlt,
  faRuler,
  faTrash,
  faUserLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IListDetails } from "../../../context/ListContext/interfaces";

const ListActions = () => {
  return (
    <div className="lists-card-view-actions">
      <FontAwesomeIcon
        icon={faHandPointUp}
        className="lists-card-view-action"
      />
      <FontAwesomeIcon icon={faHeart} className="lists-card-view-action" />
      <FontAwesomeIcon icon={faRuler} className="lists-card-view-action" />
      <FontAwesomeIcon icon={faUserLock} className="lists-card-view-action" />
      <FontAwesomeIcon icon={faPencilAlt} className="lists-card-view-action" />
      <FontAwesomeIcon icon={faTrash} className="lists-card-view-action" />
    </div>
  );
};

const List = ({ name, index }: { name: string; index: number }) => {
  return (
    <div className="list-container">
      {/* <div>{index}</div> */}
      <div>{name}</div>
    </div>
  );
};
const ListCard = ({ list }: { list: IListDetails }) => {
  return (
    <div className="lists-card">
      <div className="lists-card-name">{list.name}</div>
      <div className="lists-card-body">
        <div className="lists-card-container">
          {list.list.map((listItem, index) => (
            <List
              key={`${listItem.name}${index}`}
              name={listItem.name}
              index={index + 1}
            />
          ))}
        </div>
        <ListActions />
      </div>
    </div>
  );
};

const ListsCardView = ({ lists }: { lists: IListDetails[] }) => {
  return (
    <div className="lists-card-view">
      {lists.map((list) => (
        <ListCard key={list.id} list={list} />
      ))}
    </div>
  );
};

export default ListsCardView;
