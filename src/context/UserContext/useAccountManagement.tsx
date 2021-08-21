import { useCallback, useState } from "react";
import { IFormProperties } from "../../pages/account/interfaces";
import { ServerRoutes } from "../../config/server";
import { TVoidFunction } from "../../constants/types";
import request from "../../request";
import { useCookies } from "react-cookie";

export enum ELoginState {
  Choose,
  AccountForm,
  Web3,
  None,
}

export enum ESignupState {
  Choose,
  AccountForm,
  Web3,
  None,
}

export interface IAccountStore {
  user: null | {};
  isLoggedIn: boolean;
  error: null | string;
  loginState: ELoginState;
  signupState: ESignupState;
  cookies: {
    [name: string]: any;
  };
  isUserLoaded: boolean;
  setCookie: (name: string, value: any, options?: any | undefined) => void;
  removeCookie: (name: string, options?: any | undefined) => void;
  authLogin: (removeCookie: any) => Promise<void>;
  userSignin: (values: IFormProperties) => Promise<string>;
  userSignup: (values: IFormProperties) => Promise<"success" | "" | "fail">;
  userLogout: (cookieHandler: TVoidFunction) => Promise<void>;
  clearError: () => void;
  updateLoginState: (state: ELoginState) => void;
  updateSignupState: (state: ESignupState) => void;
}

const useAccountManagement = (): IAccountStore => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [user, setUser] = useState<null | {}>(null);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isUserLoaded, setUserLoaded] = useState(false);
  const [loginState, setLoginState] = useState(ELoginState.None);
  const [signupState, setSignupState] = useState(ESignupState.None);
  const [error, setError] = useState<null | string>(null);

  const clearError = () => {
    setError(null);
  };

  const updateSignupState = (state: ESignupState) => {
    setSignupState(state);
  };
  const updateLoginState = (state: ELoginState) => {
    setLoginState(state);
  };

  const authLogin = useCallback(async (removeCookie: any) => {
    setUserLoaded(false)
    const result = await request(ServerRoutes.auth, "GET");
    if (result.user?.id) {
      setUser(result.user);
      setUserLoaded(true)
    } else {
      removeCookie("token", { path: "/" });
    }
  }, []);

  const userSignin = async (values: IFormProperties) => {
    try {
      setUserLoaded(false);
      const userResponse: any = await request(
        ServerRoutes.auth,
        "POST",
        values
      );
      if (userResponse.message === "ok!") {
        setUser(userResponse.user);
        setLoggedIn(true);
        setUserLoaded(true);
        return userResponse.token;
      }
    } catch (e) {
      setError("There was an error with the request");
    }
  };

  const userSignup = async (values: IFormProperties) => {
    try {
      setUserLoaded(false);
      const userResponse: any = await request(
        ServerRoutes.createUser,
        "POST",
        values
      );
      if (userResponse.message === "User has been registered") {
        setUserLoaded(true);
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
