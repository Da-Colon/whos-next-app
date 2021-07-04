import React from "react";
import { Route, useRouteMatch } from "react-router";
import { Routes } from "../../../router/routes";
import Container, { EContainer } from "../../layout/Container";
import ListMain from "./ListsMain";
import ListsNew from "./ListsNew";

const ListsPage = () => {
  const { url } = useRouteMatch();
  return (
    <Container variant={EContainer.margined} addMinHeight={true} addClasses="items-start">
      <Route path={`${url}`} component={ListMain} exact />
      <Route path={`${url}${Routes.listsNew}`} component={ListsNew} exact />
      <Route path={`${url}${Routes.listsEdit}`} exact />
    </Container>
  );
};

export default ListsPage;
