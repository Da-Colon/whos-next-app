import { NavLink } from "react-router-dom";
import {
  faHandPointUp,
  faHeart,
  faPencilAlt,
  faTrash,
  faUserLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IListStore, useListData } from "../../../context/ListContext";
import { IListDetails } from "../../../context/ListContext/interfaces";
import { IUserStore, useUserStore } from "../../../context/UserContext";
import { ClientRoutes } from "../../../router/routes";
import { Tooltip } from "../../UI/Tooltip";

const ListActionButtons = ({ list }: { list: IListDetails }) => {
  const listsStore: IListStore = useListData();
  const userStore: IUserStore = useUserStore();

  const updateLikedList = () => {
    if (!userStore.userPreferences?.likedLists.includes(list.id)) {
      listsStore.updateListProperties(
        list.id,
        Object.create({ private: !list.private })
      );
      // TODO update user preferences
    }
  };
  return (
    <>
      <FontAwesomeIcon
        icon={faHandPointUp}
        className="lists-card-view-action icon-effects__point"
        data-tip="Select list"
        data-for="action-select"
      />
      <Tooltip id="action-select" />
      <FontAwesomeIcon
        icon={faHeart}
        className="lists-card-view-action icon-effects__heart"
        onClick={updateLikedList}
        data-tip="Like list"
        data-for="action-like"
      />
      <Tooltip id="action-like" />
      <FontAwesomeIcon
        icon={faUserLock}
        className="lists-card-view-action icon-effects__lock"
        onClick={() =>
          listsStore.updateListProperties(
            list.id,
            Object.create({ private: !list.private })
          )
        }
        data-tip="Update list privacy"
        data-for="action-privacy"
      />
      <Tooltip id="action-privacy" />
      <NavLink to={ClientRoutes.listsEdit(list.id)}>
        <FontAwesomeIcon
          icon={faPencilAlt}
          className="lists-card-view-action icon-effects__pencil"
          data-tip="Edit list"
          data-for="action-edit"
        />
        <Tooltip id="action-edit" />
      </NavLink>
      <FontAwesomeIcon
        icon={faTrash}
        className="lists-card-view-action icon-effects__trash"
        onClick={() => listsStore.deleteList(list.id)}
        data-tip="Delete list"
        data-for="action-delete"
      />
      <Tooltip id="action-delete" />
    </>
  );
};

export default ListActionButtons;
