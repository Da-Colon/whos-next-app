import { FC } from "react";
import { useListData } from "../../../context/ListContext";
import { INewList, IUseLists } from "../../../context/ListContext/useLIsts";
import Container, { EContainer } from "../../layout/Container";
import ListCard from "../../layout/ListCard";
import Loader from "../../layout/Loader";
import TextContainer, { ETextContainer } from "../../layout/TextContainer";

interface ILists {
  lists: INewList[] | null;
}

const Lists: FC<ILists> = ({ lists }) => {
  if (!lists) return <></>;
  return (
    <Container>
      {lists.map((list: INewList) => (
        <ListCard key={list.id} list={list} />
      ))}
    </Container>
  );
};

const UserLists = () => {
  const listsStore: IUseLists = useListData();

  if (!listsStore.isListsLoaded) {
    return <Loader />;
  }
  return (
    <Container addClasses="">
      <TextContainer variant={ETextContainer.xlarge} label="Created lists" />
      <Lists lists={listsStore.userLists} />
    </Container>
  );
};

export default UserLists;
