import { Route, useRouteMatch } from "react-router";
import { Routes } from "../../router/routes";
import Container, { EContainer } from "../../components/layout/Container";
import ListsDashboard from "../../components/lists";
import CreateListForm from "../../components/lists/CreateList";

const ListsPage = () => {
  const { url } = useRouteMatch();
  return (
    <Container variant={EContainer.inset} addMinHeight={true} addClasses="">
      <Route path={`${url}`} component={ListsDashboard} exact />
      <Route path={`${url}${Routes.listsNew}`} component={CreateListForm} exact />
      <Route path={`${url}${Routes.listsEdit}`} exact />
    </Container>
  );
};

export default ListsPage;
