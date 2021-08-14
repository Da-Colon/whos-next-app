import { useListData } from "../../../context/ListContext";
import { IUseLists } from "../../../context/ListContext/useLIsts";
import Container from "../../layout/Container";
import Loader from "../../layout/Loader";
import TextContainer, { ETextContainer } from "../../layout/TextContainer";
import Lists from "../shared/Lists";

const PublicLists = () => {
  const listsStore: IUseLists = useListData();

  if (!listsStore.isListsLoaded) {
    return (
      <Container addClasses="py-4">
        <TextContainer variant={ETextContainer.xlarge} label="Public lists" />
        <Loader />
      </Container>
    );
  }
  if(!listsStore.publicLists) {
   return (
      <Container addClasses="py-4">
        <TextContainer variant={ETextContainer.xlarge} label="Public lists" />
      </Container>
    );
  }
  return (
    <Container addClasses="py-4">
      <TextContainer variant={ETextContainer.xlarge} label="Public lists" />
      <Lists lists={listsStore.publicLists} />
    </Container>
  );
};

export default PublicLists;
