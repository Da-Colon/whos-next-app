import { FC, useEffect } from "react";
import { Route } from "react-router-dom";
import Landing from "../pages/landing";
import { Routes } from "../router/routes";
import ListsPage from "../pages/lists";
import PickersContainer from "../pages/pickers";
import { IListStore, useListData } from "../context/ListContext";

const Body: FC<{ isLoggedIn: boolean }> = ({ isLoggedIn }) => {
  const { loadLists, isListsLoaded }: IListStore = useListData();
  useEffect(() => {
    if (isLoggedIn) {
      loadLists();
    }
  }, [isLoggedIn, loadLists]);

  if(!isListsLoaded) return null
  return (
    <div className="body-container">
      <Route path={Routes.home} component={Landing} exact />
      <Route path={Routes.lists} component={ListsPage} />
      <Route path={Routes.picker} component={PickersContainer} />
    </div>
  );
};

export default Body;
