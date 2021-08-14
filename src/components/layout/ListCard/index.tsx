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
      addClasses="overflow-y-auto overflow-x-hidden px-4 bg-ghost_white remove-scroll-background"
      styles={{ maxHeight: "10em" }}
    >
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

const ActionButtonContainer = () => {
  // TODO add tooltips to each icon
  return (
    <Container
      variant={EContainer.flex}
      addClasses="bg-white p-2 rounded-b justify-around text-black"
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
    <Container variant={EContainer.column} addClasses="my-4 w-56 shadow-card rounded-t">
      <Container variant={EContainer.column} addClasses="flex-grow">
        <TextContainer
          label={`${list?.name} (${list?.list?.length})`}
          addClasses="text-lg flex-grow shadow-inset text-center py-1 px-3 bg-ghost_white text-black font-bold tracking-wider"
        />
        <List list={list} />
      </Container>
      <ActionButtonContainer />
    </Container>
  );
};

export default ListCard;
