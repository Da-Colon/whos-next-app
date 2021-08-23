import { FC } from "react";
import { IListDetails } from "../../../context/ListContext/interfaces";
import { IUserStore, useUserStore } from "../../../context/UserContext";
import Container, { EContainer } from "../../layout/Container";
import ListCard from "../../layout/ListCard";

interface ILists {
  lists: IListDetails[] | null;
  isPublic?: boolean;
}

const Lists: FC<ILists> = ({ lists, isPublic }) => {
  const userStore: IUserStore = useUserStore();
  if (!lists) return <></>;
  return (
    <Container variant={EContainer.flex} addClasses="gap-8">
      {lists
        .filter((list) => list.id !== userStore.userPreferences?.selectedList)
        .map((list: IListDetails) => (
          <ListCard key={list.id} list={list} isPublic={isPublic} />
        ))}
    </Container>
  );
};

export default Lists;
