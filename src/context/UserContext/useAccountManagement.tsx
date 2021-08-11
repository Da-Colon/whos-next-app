import { useState } from "react";
import { IFormProperties } from "../../pages/account/interfaces";
import { ServerRoutes } from "../../config/server";
import { TVoidFunction } from "../../constants/types";
import request from "../../request";

const useAccountManagement = () => {
  const [user, setUser] = useState<null | {}>(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const clearError = () => {
    setError(null);
  };

  const userSignin = async (values: IFormProperties) => {
    try {
      const userResponse: any = await request(ServerRoutes.auth, "POST", values);
      if (userResponse.message === "ok!") {
        setUser(userResponse.user);
        setLoggedIn(true);
        return userResponse.token;
      }
    } catch (e) {
      setError("There was an error with the request");
    }
  };

  const userSignup = async (values: IFormProperties) => {
    try {
      const userResponse: any = await request(ServerRoutes.createUser, "POST", values);
      if (userResponse.message === "User has been registered") {
        return "success";
      }
      return ""
    } catch (e) {
      setError("There was an error with the request");
      return "fail";
    }
  };

  const userLogout = async (cookieHandler: TVoidFunction) => {
    setUser(null);
    setLoggedIn(false);
    cookieHandler();
  };

  return {
    user,
    loggedIn,
    error,
    userSignin,
    userSignup,
    userLogout,
    clearError,
  };
};

export { useAccountManagement };
