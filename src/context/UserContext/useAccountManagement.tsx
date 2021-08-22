import { useCallback, useState } from "react";
import { ServerRoutes } from "../../config/server";
import { TVoidFunction } from "../../constants/types";
import request from "../../request";
import { useCookies } from "react-cookie";

export enum EAccountState {
  Choose,
  AccountForm,
  Web3,
  None,
}

export interface IFormProperties {
  email: string;
  password: string;
}
export interface IUserObject {
  user: {
    email: string;
    id: string;
  };
  token: string;
}

export interface IAccountStore {
  user: null | IUserObject;
  isLoggedIn: boolean;
  error: null | string;
  loginState: EAccountState;
  signupState: EAccountState;
  cookies: {
    [name: string]: any;
  };
  isUserLoaded: boolean;
  setCookie: (name: string, value: any, options?: any | undefined) => void;
  removeCookie: (name: string, options?: any | undefined) => void;
  authLogin: (removeCookie: any) => Promise<void>;
  userSignin: (values: IFormProperties) => Promise<string>;
  userSignup: (values: IFormProperties) => Promise<IUserObject>;
  userLogout: (cookieHandler: TVoidFunction) => Promise<void>;
  clearError: () => void;
  updateLoginState: (state: EAccountState) => void;
  updateSignupState: (state: EAccountState) => void;
}

const useAccountManagement = (): IAccountStore => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [user, setUser] = useState<null | IUserObject>(null);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isUserLoaded, setUserLoaded] = useState(false);
  const [loginState, setLoginState] = useState(EAccountState.None);
  const [signupState, setSignupState] = useState(EAccountState.None);
  const [error, setError] = useState<null | string>(null);

  const clearError = () => {
    setError(null);
  };

  const updateSignupState = (state: EAccountState) => {
    setSignupState(state);
  };
  const updateLoginState = (state: EAccountState) => {
    setLoginState(state);
  };

  const authLogin = useCallback(async () => {
    setUserLoaded(false);
    const result = await request(ServerRoutes.auth, "GET");
    if (result.user?.id) {
      setUser(result.user);
      setUserLoaded(true);
    } else {
      removeCookie("token", { path: "/" });
    }
  }, [removeCookie]);

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
      return userResponse;
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
