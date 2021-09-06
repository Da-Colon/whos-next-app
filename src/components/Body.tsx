import { useEffect } from "react";
import { Route } from "react-router-dom";
import Landing from "../pages/landing";
import ListsPage from "../pages/lists";
import PickersContainer from "../pages/pickers";
import { IListStore, useListStore } from "../context/ListContext";
import { Routes } from "../config/client";

interface IBodyProps {
  isLoggedIn: boolean;
}

const Body = ({ isLoggedIn }: IBodyProps) => {
  const { loadLists, isListsLoaded }: IListStore = useListStore();
  useEffect(() => {
    if (isLoggedIn) {
      loadLists();
    }
  }, [isLoggedIn, loadLists]);

  if (!isListsLoaded) return null;
  return (
    <div className="body-container">
      <Route path={Routes.Home} component={Landing} exact />
      <Route path={Routes.Lists} component={ListsPage} />
      <Route path={Routes.Picker} component={PickersContainer} />
    </div>
  );
};

export default Body;
