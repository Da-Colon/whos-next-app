import { IListStore, useListData } from "../../../context/ListContext";
import Container from "../../layout/Container";
import Loader from "../../layout/Loader";
import TextContainer, { ETextContainer } from "../../layout/TextContainer";
import Lists from "../shared/Lists";

const PublicLists = () => {
  const listsStore: IListStore = useListData();
  const publicLists = listsStore.publicLists?.filter((list) => listsStore.userLists?.includes(list))
  if (!listsStore.isListsLoaded) {
    return (
      <Container addClasses="py-4">
        <TextContainer variant={ETextContainer.xlarge} label="Public Lists" addClasses="text-center" />
        <Loader />
      </Container>
    );
  }
  if(!listsStore.publicLists) {
   return (
      <Container addClasses="py-4">
        <TextContainer variant={ETextContainer.xlarge} label="There was an error loading public lists" addClasses="text-center"/>
      </Container>
    );
  }
  if(!publicLists?.length) {
    return (
      <Container>
        <TextContainer addClasses="text-gold text-center" label="No public lists to show" />
      </Container>
    )
  }
  return (
    <Container addClasses="py-4">
      <TextContainer variant={ETextContainer.xlarge} label="Public Lists" addClasses="text-center"/>
      <Lists lists={publicLists} isPublic />
    </Container>
  );
};

export default PublicLists;
