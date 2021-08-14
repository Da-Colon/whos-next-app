import { useListData } from "../../../context/ListContext";
import { IUseLists } from "../../../context/ListContext/useLIsts";
import Container from "../../layout/Container";
import Loader from "../../layout/Loader";
import TextContainer, { ETextContainer } from "../../layout/TextContainer";
import Lists from "../shared/Lists";

const UserLists = () => {
  const listsStore: IUseLists = useListData();

  if (!listsStore.isListsLoaded) {
    return (
      <Container>
        <TextContainer variant={ETextContainer.xlarge} label="Created lists" />
        <Loader />
      </Container>
    );
  }
  if(!listsStore.userLists) {
    return (
       <Container addClasses="py-4">
         <TextContainer variant={ETextContainer.xlarge} label="Created lists" />
       </Container>
     );
   }
  return (
    <Container addClasses="my-4">
      <TextContainer variant={ETextContainer.xlarge} label="Created lists" />
      <Lists lists={listsStore.userLists} />
    </Container>
  );
};

export default UserLists;
