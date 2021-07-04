import React from "react";
import Container from "../../layout/Container";
import TextContainer, { ETextContainer } from "../../layout/TextContainer";
import ListsCreated from "./ListsCreated";

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
      <TextContainer variant={ETextContainer.xlarge} label="Created lists" />
      <ListsCreated />
      <TextContainer
        variant={ETextContainer.xlarge}
        label="Recently Uploaded (Public)"
      />
    </Container>
  );
};

export default ListMain;
