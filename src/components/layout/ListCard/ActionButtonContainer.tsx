import {
  faHandPointer,
  faPencilAlt,
  faSave,
  faThumbsUp,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { IListDetails } from "../../../context/ListContext/interfaces";
import { IUserStore, useUserStore } from "../../../context/UserContext";
import ButtonWithIcon from "../Button/ButtonWithIcon";
import Container, { EContainer } from "../Container";

interface IActionButtonContainer {
  list?: IListDetails;
  isPublic?: boolean;
  isSelected?: boolean;
}

const ActionButtonContainer: FC<IActionButtonContainer> = ({
  isPublic,
  list,
}) => {
  const userStore: IUserStore = useUserStore();

  // TODO add tooltips to each icon
  // TODO load user pref to see if list is liked?
  // TODO add like to model
  // TODO Maybe download feature?
  if (isPublic) {
    return (
      <Container
        variant={EContainer.flex}
        addClasses="bg-white p-2 rounded-b justify-around text-black"
      >
        <Container>
          <ButtonWithIcon>
            <FontAwesomeIcon icon={faThumbsUp} />
          </ButtonWithIcon>
        </Container>
        {/* <Container>
          <ButtonWithIcon>
            <FontAwesomeIcon icon={faDownload} />
          </ButtonWithIcon>
        </Container> */}
        <Container>
          <ButtonWithIcon>
            <FontAwesomeIcon icon={faSave} />
          </ButtonWithIcon>
        </Container>
      </Container>
    );
  }
  return (
    <Container
      variant={EContainer.flex}
      addClasses="bg-white p-2 rounded-b justify-around text-black"
    >
      <Container>
        {/* TODO Updates user preference to select list */}
        {/* TODO Don't show if current list is selected */}
        {list?.id !== userStore.userPreferences?.selectedList && (
          <ButtonWithIcon
            handleClick={() =>
              userStore.updateSelectedList(list?.id ? list.id : "")
            }
          >
            <FontAwesomeIcon icon={faHandPointer} />
          </ButtonWithIcon>
        )}
      </Container>
      <Container>
        {/* TODO navigates to edit page */}
        <ButtonWithIcon>
          <FontAwesomeIcon icon={faPencilAlt} />
        </ButtonWithIcon>
      </Container>
      <Container>
        {/* TODO deletes lists */}
        {/* TODO add confirmation modal */}
        <ButtonWithIcon>
          <FontAwesomeIcon icon={faTrash} />
        </ButtonWithIcon>
      </Container>
    </Container>
  );
};

export default ActionButtonContainer;
