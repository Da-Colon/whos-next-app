import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import { faCheck, faHandPointUp, faHeart, faLock, faLockOpen, faPencilAlt, faTrash, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IListStore, useListStore } from "../../../../context/ListContext";
import { IListDetails } from "../../../../context/ListContext/interfaces";
import { IUserStore, useUserStore } from "../../../../context/UserContext";
import { Tooltip } from "../../../layout/UI/Tooltip";
import { ClientRoutes } from "../../../../config/client";

interface IActionButtonProps {
  icon: IconDefinition;
  className: string;
  "data-tip": string;
  "data-for": string;
  isVisible?: boolean;
  onClick?: () => void;
  altComponent: ReactElement | null;
}

const ActionButton = ({ isVisible, altComponent, ...rest }: IActionButtonProps) => {
  if (!isVisible) return altComponent;
  return (
    <>
      <FontAwesomeIcon {...rest} />
      <Tooltip id={rest["data-for"]} />
    </>
  );
};

const AltView = ({ isVisible, altComponent, ...rest }: IActionButtonProps) => {
  if (!isVisible) return altComponent;
  return (
    <div className="list-action-button-alt">
      <FontAwesomeIcon {...rest} />
      <Tooltip id={rest["data-for"]} />
    </div>
  );
};

const EditButton = ({ isVisible, altComponent, ...rest }: IActionButtonProps & { id: string }) => {
  if (!isVisible) return altComponent;
  return (
    <NavLink to={ClientRoutes.listsEdit(rest.id)}>
      <div className="list-action-button-alt">
        <FontAwesomeIcon {...rest} />
        <Tooltip id={rest["data-for"]} />
      </div>
    </NavLink>
  );
};

const ListActionButtons = ({ list, isUserLists }: { list: IListDetails; isUserLists?: boolean }) => {
  const listsStore: IListStore = useListStore();
  const userStore: IUserStore = useUserStore();

  // todo add heart icon around number of likes, may need to increase size.

  const updateLikedList = () => {
    if (!userStore.userPreferences?.likedLists.includes(list.id)) {
      listsStore.updateListProperties(list.id, Object.create({ isPrivate: !list.isPrivate }));
      // TODO update user preferences
    }
  };

  // returns true when list id matches user's selected list
  const showSelect = userStore.userPreferences?.selectedList !== list.id && isUserLists === true;

  return (
    <>
      <ActionButton
        icon={faHandPointUp}
        className="lists-card-view-action icon-effects__point"
        data-tip="Select list"
        data-for="action-select"
        isVisible={showSelect}
        onClick={() => userStore.updateSelectedList(list.id)}
        altComponent={
          <AltView
            icon={faCheck}
            data-tip="Currently Selected"
            data-for="action-selected"
            altComponent={null}
            className="pointer-icon"
            isVisible={true}
          />
        }
      />
      <ActionButton
        icon={faHeart}
        className="lists-card-view-action icon-effects__heart"
        onClick={updateLikedList}
        data-tip="Like list"
        data-for="action-like"
        altComponent={<div>{list.likes}</div>}
        isVisible={!isUserLists}
      />
      <AltView
        icon={faLock}
        className="icon-effects__lock"
        data-tip="Private List"
        data-for="action-privacy"
        isVisible={list.isPrivate && isUserLists}
        altComponent={
          <AltView
            icon={faLockOpen}
            className="icon-effects__unlock"
            data-tip="Public List"
            data-for="action-privacy"
            isVisible={!list.isPrivate && isUserLists}
            altComponent={null}
          />
        }
      />
      <EditButton
        icon={faPencilAlt}
        className="lists-card-view-action icon-effects__pencil"
        data-tip="Edit list"
        data-for="action-edit"
        altComponent={null}
        id={list.id}
        isVisible={isUserLists}
      />
      <ActionButton
        icon={faTrash}
        className="lists-card-view-action icon-effects__trash"
        onClick={() => listsStore.updateShowListDeleteModal(list.id)}
        data-tip="Delete list"
        data-for="action-delete"
        isVisible={isUserLists}
        altComponent={null}
      />
    </>
  );
};

export default ListActionButtons;
