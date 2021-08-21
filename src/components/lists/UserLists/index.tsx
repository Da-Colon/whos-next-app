import { IListStore, useListData } from "../../../context/ListContext";
import { IUserStore, useUserStore } from "../../../context/UserContext";
import Container, { EContainer } from "../../layout/Container";
import ListCard from "../../layout/ListCard";
import Loader from "../../layout/Loader";
import TextContainer, { ETextContainer } from "../../layout/TextContainer";
import Lists from "../shared/Lists";

const UserLists = () => {
  const listsStore: IListStore = useListData();
  const userStore: IUserStore = useUserStore();
  if (!listsStore.isListsLoaded) {
    return (
      <Container>
        <TextContainer variant={ETextContainer.xlarge} label="Created lists" addClasses="text-center"/>
        <Loader />
      </Container>
    );
  }
  if (!listsStore.userLists) {
    return (
      <Container addClasses="py-4">
        <TextContainer variant={ETextContainer.xlarge} label="Created Lists" addClasses="text-center"/>
      </Container>
    );
  }
  const selectedList = listsStore.userLists.find(
    (list) => list.id === userStore.userPreferences?.selectedList
  );
  return (
    <Container addClasses="my-4">
      <TextContainer
        variant={ETextContainer.xlarge}
        label="My Lists"
        addClasses="text-center"
      />
      <Container variant={EContainer.flex} addClasses="gap-8">
        {selectedList ? <ListCard list={selectedList} isSelected /> : null}
        <Lists lists={listsStore.userLists} />
      </Container>
    </Container>
  );
};

export default UserLists;
