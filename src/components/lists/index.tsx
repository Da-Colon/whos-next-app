import Container from "../../components/layout/Container";
import TextContainer, { ETextContainer } from "../../components/layout/TextContainer";
import UserLists from "./UserLists";
import PublicLists from "./PublicLists";

const ListMain = () => {
  // TODO map out the rest of created lists
  // TODO sort by date created
  // TODO recent two with see all?
  // ! Future update
  // TODO map out 'public' lists
  // TODO sort by popularity
  // TODO will need page to look through and sort
  return (
    <Container addClasses="px-8">
      <UserLists />
      <TextContainer
        variant={ETextContainer.xlarge}
        label="Recently Uploaded (Public)"
      />
      <PublicLists />
    </Container>
  );
};

export default ListMain;
