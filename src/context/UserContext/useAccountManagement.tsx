import { useCallback, useState } from "react";
import { IFormProperties } from "../../pages/account/interfaces";
import { ServerRoutes } from "../../config/server";
import { TVoidFunction } from "../../constants/types";
import request from "../../request";

export interface IAccountStore {
  user: null | {};
  loggedIn: boolean;
  error: null | string;
  authLogin: (removeCookie: any) => Promise<void>;
  userSignin: (values: IFormProperties) => Promise<string>;
  userSignup: (values: IFormProperties) => Promise<"success" | "" | "fail">;
  userLogout: (cookieHandler: TVoidFunction) => Promise<void>;
  clearError: () => void;
}

const useAccountManagement = (): IAccountStore => {
  const [user, setUser] = useState<null | {}>(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const clearError = () => {
    setError(null);
  };

  const authLogin = useCallback(async (removeCookie: any) => {
    const result = await request(ServerRoutes.auth, 'GET')
    if(result.user?.id) {
      setUser(result.user)
    } else {
      removeCookie("token", { path: "/" })
    }
  }, [])

  const userSignin = async (values: IFormProperties) => {
    try {
      const userResponse: any = await request(
        ServerRoutes.auth,
        "POST",
        values
      );
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
      const userResponse: any = await request(
        ServerRoutes.createUser,
        "POST",
        values
      );
      if (userResponse.message === "User has been registered") {
        return "success";
      }
      return "";
    } catch (e) {
      setError("There was an error with the request");
      return "fail";
    }
  };

  const userLogout = async (cookieHandler: TVoidFunction) => {
    // TODOroute to remove token for collection
    setUser(null);
    setLoggedIn(false);
    cookieHandler();
  };

  return {
    user,
    loggedIn,
    error,
    authLogin,
    userSignin,
    userSignup,
    userLogout,
    clearError,
  };
};

export { useAccountManagement };
