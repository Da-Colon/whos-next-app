import { Route, useRouteMatch } from "react-router";
import CreateNewList from "../../components/lists/CreateNewList";
import Dashboard from "../../components/lists/Dashboard";
import EditList from "../../components/lists/EditList";
import { Routes } from "../../config/client";

const ListsPage = () => {
  const { url } = useRouteMatch();

    // TODO sort by date created
  // TODO recent two with see all?
  // ! Future update
  // TODO sort by popularity
  // TODO will need page to look through and sort
  // TODO Search lists?
  return (
    <div style={{minHeight: "calc(100vh - 14rem)"}}>
      <Route path={`${url}`} component={Dashboard} exact />
      <Route path={`${url}${Routes.ListsNew}`} component={CreateNewList} exact />
      <Route path={`${url}${Routes.ListsEdit}`} component={EditList} exact />
    </div>
  );
};

export default ListsPage;
