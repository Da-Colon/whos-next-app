import { useCallback, useState } from "react";
import { ServerRoutes } from "../../config/server";
import request from "../../request";
import { useCookies } from "react-cookie";
import {
  AccountStore,
  AuthLogin,
  UpdateAccountState,
  User,
  UserLogout,
  UserSignin,
  UserSignup,
} from "../typescript/users.types";
import { AccountState } from "../typescript/users.enums";

const useAccountManagement = (): AccountStore => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isUserLoaded, setUserLoaded] = useState(false);
  const [loginState, setLoginState] = useState(AccountState.None);
  const [signupState, setSignupState] = useState(AccountState.None);
  const [error, setError] = useState<null | string>(null);

  const clearError = () => {
    setError(null);
  };

  const updateSignupState: UpdateAccountState = (state) => {
    setSignupState(state);
  };
  const updateLoginState: UpdateAccountState = (state) => {
    setLoginState(state);
  };

  const authLogin: AuthLogin = useCallback(async () => {
    setUserLoaded(false);
    const result = await request(ServerRoutes.auth, "GET");
    if (result.user?.id) {
      setUser(result.user);
      setUserLoaded(true);
    } else {
      removeCookie("token", { path: "/" });
    }
  }, [removeCookie]);

  const userSignin: UserSignin = async (values) => {
    try {
      setUserLoaded(false);
      const userResponse: any = await request(ServerRoutes.auth, "POST", values);
      if (userResponse.message === "ok!") {
        setCookie("token", userResponse.token, { path: "/" });
        setUser(userResponse.user);
        setLoggedIn(true);
        setUserLoaded(true);
        return true;
      }
      return false;
    } catch (e) {
      setError("There was an error with the request");
      return false;
    }
  };

  const userSignup: UserSignup = async (values) => {
    try {
      setUserLoaded(false);
      const userResponse: any = await request(ServerRoutes.createUser, "POST", values);
      if (userResponse.message === "User has been registered") {
        setUserLoaded(true);
        return "success";
      }
      return userResponse;
    } catch (e) {
      setError("There was an error with the request");
      return "fail";
    }
  };

  const userLogout: UserLogout = async (cookieHandler) => {
    // TODOroute to remove token for collection
    setUser(null);
    setLoggedIn(false);
    cookieHandler();
  };

  return {
    user,
    isLoggedIn,
    error,
    loginState,
    signupState,
    cookies,
    isUserLoaded,
    setCookie,
    removeCookie,
    authLogin,
    userSignin,
    userSignup,
    userLogout,
    clearError,
    updateLoginState,
    updateSignupState,
  };
};

export { useAccountManagement };
