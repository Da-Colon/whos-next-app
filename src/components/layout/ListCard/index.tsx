import { FC } from "react";
import TextContainer from "../TextContainer";
import { INewList } from "../../../context/ListContext/useLIsts";
import Container, { EContainer } from "../Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPointer,
  faPencilAlt,
  faSave,
  faThumbsUp,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import ButtonWithIcon from "../Button/ButtonWithIcon";
import { IUserContext, useUserData } from "../../../context/UserContext";

interface IListCard {
  list?: INewList;
  isPublic?: boolean;
  isSelected?: boolean;
}

const List: FC<IListCard> = ({ list }) => {
  return (
    <Container addClasses="overflow-y-auto overflow-x-hidden px-4 bg-ghost_white remove-scroll-background flex-grow">
      {list?.list.map((listItem, index) => (
        <Container key={`${listItem}_${index}`}>
          <TextContainer
            label={`${index + 1}.  ${listItem.name}`}
            addClasses="text-dark_green font-semibold text-sm py-1 border-b border-black whitespace-nowrap"
          />
        </Container>
      ))}
    </Container>
  );
};

const ActionButtonContainer: FC<IListCard> = ({ isPublic, list }) => {
  const userStore: IUserContext = useUserData();

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

const ListCard: FC<IListCard> = ({ list, isPublic, isSelected }) => {
  return (
    <Container
      variant={EContainer.column}
      addClasses="my-4 w-56 rounded-t"
      styles={{ height: "20rem" }}
    >
      {isSelected && (
        <TextContainer
          label="Selected"
          addClasses="text-md shadow-insetGold text-center py-1 px-3 bg-black text-gold font-bold tracking-wider"
        />
      )}
      <TextContainer
        label={`${list?.name} (${list?.list?.length})`}
        addClasses="text-lg shadow-inset text-center py-1 px-3 bg-ghost_white text-black font-bold tracking-wider"
      />
      <List list={list} />
      <ActionButtonContainer list={list} isPublic={isPublic} />
    </Container>
  );
};

export default ListCard;
