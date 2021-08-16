import Container, { EContainer } from "../../components/layout/Container";
import UserLists from "./UserLists";
import PublicLists from "./PublicLists";

const ListMain = () => {
  // TODO sort by date created
  // TODO recent two with see all?
  // ! Future update
  // TODO sort by popularity
  // TODO will need page to look through and sort
  // TODO Search lists?
  return (
    <Container variant={EContainer.column} addClasses="px-8 justify-around">
      <UserLists />
      <PublicLists />
    </Container>
  );
};

export default ListMain;
