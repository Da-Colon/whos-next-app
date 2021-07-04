import React, { FC } from "react";
import { Route } from "react-router-dom";
import Landing from "../components/pages/landing";
import { Routes } from "../router/routes";
import ListsPage from "./pages/lists";
import LoginPage from "./pages/account/login";
import PickersContainer from "./pages/pickers";
import SignupPage from "./pages/account/signup";

const Body: FC<{ cookieHandler: any }> = ({ cookieHandler }) => {
  return (
    <div className="px-6" style={{ minHeight: "calc(100vh - 7rem" }}>
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
