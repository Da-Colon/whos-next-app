import { FC } from "react";
import { IListDetails } from "../../../context/ListContext/interfaces";
import Container from "../Container";
import TextContainer from "../TextContainer";

interface IListCard {
  list?: IListDetails;
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

export default List;
