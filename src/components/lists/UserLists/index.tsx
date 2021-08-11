import { useListData } from "../../../context/ListContext";
import { IUseLists } from "../../../context/ListContext/useLIsts";
import Container, { EContainer } from "../../layout/Container";
import ListCard from "../../layout/ListCard";
import Loader from "../../layout/Loader";

const UserLists = () => {
  const listsStore: IUseLists = useListData()

  if(!listsStore.isListsLoaded) {
    return <Loader />
  }
  return (
    <Container variant={EContainer.flex} addClasses="mt-8">
      <ListCard title="selected" />
      <ListCard title="Add List" variant="new" />
    </Container>
  );
};

export default UserLists;
