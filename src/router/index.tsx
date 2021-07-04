import React, { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";

const AppRouter: FC<{children: JSX.Element}> = ({ children }) => {
  return <Router>{children}</Router>;
};

export default AppRouter;
