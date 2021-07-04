import React from "react";
import Container, { EContainer } from "../../layout/Container";
import ListCard from "../../layout/ListCard";

const ListsCreated = () => {
  return (
    <Container variant={EContainer.flex} addClasses="mt-8">
      <ListCard title="selected" />
      <ListCard title="Add List" variant="new" />
    </Container>
  );
};

export default ListsCreated;
