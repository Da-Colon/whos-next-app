import { FC } from "react";
import TextContainer from "../TextContainer";
import Container, { EContainer } from "../Container";
import classnames from "classnames";
import ActionButtonContainer from "./ActionButtonContainer";
import List from "./List";
import { INewList } from "../../../context/ListContext/interfaces";

interface IListCard {
  list?: INewList;
  isPublic?: boolean;
  isSelected?: boolean;
}

const ListCard: FC<IListCard> = ({ list, isPublic, isSelected }) => {
  return (
    <Container
      variant={EContainer.column}
      addClasses={classnames("my-4 w-56 rounded-t", {
        "border-4 border-gold": isSelected,
      })}
      styles={{ height: "20rem" }}
    >
      {isSelected && (
        <TextContainer
          label="Selected"
          addClasses="text-md shadow-insetGold text-center py-1 px-3 bg-black text-gold font-bold tracking-wider"
        />
      )}
      <TextContainer
        label={`${list?.name}`}
        addClasses="text-lg shadow-inset text-center py-1 px-3 bg-ghost_white text-black font-bold tracking-wider"
      />
      <List list={list} />
      <ActionButtonContainer list={list} isPublic={isPublic} />
    </Container>
  );
};

export default ListCard;
