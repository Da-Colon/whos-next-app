import { NavLink } from "react-router-dom";
import {
  faCheck,
  faHandPointUp,
  faHeart,
  faLock,
  faLockOpen,
  faPencilAlt,
  faTrash,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IListStore, useListData } from "../../../context/ListContext";
import { IListDetails } from "../../../context/ListContext/interfaces";
import { IUserStore, useUserStore } from "../../../context/UserContext";
import { ClientRoutes } from "../../../router/routes";
import { Tooltip } from "../../UI/Tooltip";
import { FC, ReactElement } from "react";

interface IActionButton {
  icon: IconDefinition;
  className: string;
  "data-tip": string;
  "data-for": string;
  isVisible?: boolean;
  onClick?: () => void;
  altComponent: ReactElement | null;
}

const ActionButton: FC<IActionButton> = ({isVisible, altComponent, ...rest}) => {
  if (!isVisible) return altComponent;
  return (
    <>
      <FontAwesomeIcon {...rest} />
      <Tooltip id={rest["data-for"]} />
    </>
  );
};

const AltView: FC<IActionButton> = ({isVisible, altComponent, ...rest}) => {
  if (!isVisible) return altComponent;
  return (
    <div className="list-action-button-alt">
      <FontAwesomeIcon {...rest} />
      <Tooltip id={rest["data-for"]} />
    </div>
  );
};

const ListActionButtons = ({
  list,
  isUserLists,
}: {
  list: IListDetails;
  isUserLists?: boolean;
}) => {
  const listsStore: IListStore = useListData();
  const userStore: IUserStore = useUserStore();

  // todo add heart icon around number of likes, may need to increase size.
  // todo being lazy here and needs to be moved: list added to interface

  const EditButton: FC<IActionButton> = ({isVisible, altComponent, ...rest}) => {
    if (!isVisible) return altComponent;
    return (
      <NavLink to={ClientRoutes.listsEdit(list.id)}>
        <div className="list-action-button-alt">
          <FontAwesomeIcon {...rest} />
          <Tooltip id={rest["data-for"]} />
        </div>
      </NavLink>
    );
  };
  const updateLikedList = () => {
    if (!userStore.userPreferences?.likedLists.includes(list.id)) {
      listsStore.updateListProperties(
        list.id,
        Object.create({ isPrivate: !list.isPrivate })
      );
      // TODO update user preferences
    }
  };

  // component conditionals
  const showSelect =
    userStore.userPreferences?.selectedList !== list.id && isUserLists === true;

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
