import { FC, useEffect } from "react";
import { Route } from "react-router-dom";
import Landing from "../pages/landing";
import { Routes } from "../router/routes";
import ListsPage from "../pages/lists";
import LoginPage from "../pages/account/login";
import PickersContainer from "../pages/pickers";
import SignupPage from "../pages/account/signup";
import { IListContext, useListData } from "../context/ListContext";

const Body: FC<{ cookieHandler: any; isLoggedIn: boolean }> = ({
  cookieHandler,
  isLoggedIn,
}) => {
  const { loadLists }: IListContext = useListData();
  useEffect(() => {
    if (isLoggedIn) {
      loadLists();
    }
  }, [isLoggedIn, loadLists]);
  return (
    <div className="body-container">
      <Route path={Routes.home} component={Landing} exact />
      <Route path={Routes.login} exact>
        <LoginPage cookieHandler={cookieHandler} />
      </Route>
      <Route path={Routes.signup} exact>
        <SignupPage />
      </Route>
      <Route path={Routes.lists} component={ListsPage} />
      <Route path={Routes.picker} component={PickersContainer} />
    </div>
  );
};

export default Body;
