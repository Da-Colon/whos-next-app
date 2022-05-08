import { useEffect } from "react";
import { Route } from "react-router-dom";
import Landing from "../pages/landing";
import ListsPage from "../pages/lists";
import PickersContainer from "../pages/pickers";
import { useListStore } from "../context/ListContext";
import { Routes } from "../config/client";
import { ListsStore } from "../context/typescript/lists.types";

interface IBodyProps {
  isLoggedIn: boolean;
}

const Body = ({ isLoggedIn }: IBodyProps) => {
  const { loadLists }: ListsStore = useListStore();
  useEffect(() => {
    if (isLoggedIn) {
      loadLists();
    }
  }, [isLoggedIn, loadLists]);

  return (
    <div className="body-container">
      <Route path={Routes.Home} component={Landing} exact />
      <Route path={Routes.Lists} component={ListsPage} />
      <Route path={Routes.Picker} component={PickersContainer} />
    </div>
  );
};

export default Body;
