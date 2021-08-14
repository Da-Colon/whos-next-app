import { FC } from "react";
import { INewList } from "../../../context/ListContext/useLIsts";
import Container, { EContainer } from "../../layout/Container";
import ListCard from "../../layout/ListCard";

interface ILists {
  lists: INewList[] | null;
}

const Lists: FC<ILists> = ({ lists }) => {
  if (!lists) return <></>;
  return (
    <Container variant={EContainer.flex} addClasses="gap-8">
      {lists.map((list: INewList) => (
        <ListCard key={list.id} list={list} />
      ))}
    </Container>
  );
};

export default Lists