import { FC } from "react";
import TextContainer from "../TextContainer";
import { INewList } from "../../../context/ListContext/useLIsts";
import Container, { EContainer } from "../Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPointer,
  faPencilAlt,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import ButtonWithIcon from "../Button/ButtonWithIcon";

interface IListCard {
  list?: INewList;
}

const List: FC<IListCard> = ({ list }) => {
  return (
    <Container
      addClasses="overflow-y-auto overflow-x-hidden px-2 h-24 bg-ghost_white"
      styles={{ maxHeight: "8em" }}
    >
      {list?.list.map((listItem, index) => (
        <Container key={`${listItem}_${index}`}>
          <TextContainer
            label={`${index + 1}.  ${list.name}`}
            addClasses="text-dark_green font-semibold text-sm py-1 border-b border-black"
          />
        </Container>
      ))}
    </Container>
  );
};

const ActionButtonContainer = () => {
  // TODO add tooltips to each icon
  return (
    <Container
      variant={EContainer.flex}
      addClasses="bg-gray-400 p-2 rounded justify-around text-white"
    >
      <Container>
        {/* TODO Updates user preference to select list */}
        {/* TODO Don't show if current list is selected */}
        <ButtonWithIcon>
          <FontAwesomeIcon icon={faHandPointer} />
        </ButtonWithIcon>
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

const ListCard: FC<IListCard> = ({ list }) => {
  return (
    <Container addClasses="my-4 w-40 shadow-card rounded">
      <Container addClasses="">
        <TextContainer
          label={`${list?.name} (${list?.list?.length})`}
          addClasses="text-lg shadow-inset text-center py-1 bg-ghost_white text-black font-bold tracking-wider"
        />
        <List list={list} />
      </Container>
      <ActionButtonContainer />
    </Container>
  );
};

export default ListCard;
