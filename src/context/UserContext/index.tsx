import { Context, createContext, useContext } from "react";
import { IFormProperties } from "../../pages/account/interfaces";
import { TVoidFunction } from "../../constants/types";
import { useAccountManagement } from "./useAccountManagement";
let context: Context<IUserContext>;

export interface IUserContext {
  user: {} | null,
  loggedIn: boolean,
  error: null | string,
  userSignin: (values: IFormProperties) => Promise<string>,
  userSignup: (values: IFormProperties) => Promise<string>,
  userLogout: (cookieHandler: TVoidFunction) => void,
  clearError: TVoidFunction
}

const createDataRoot = () => {
  context = createContext({} as IUserContext);
  context.displayName = "Data Provider";
  const Provider = context.Provider;

  return ({ children }: {children: JSX.Element}) => {
    const {
      user,
      loggedIn,
      error,
      userSignin,
      userSignup,
      userLogout,
      clearError,
    } = useAccountManagement();

    const dataContext = {
      user,
      loggedIn,
      error,
      userSignin,
      userSignup,
      userLogout,
      clearError,
    };

    return <Provider value={dataContext}>{children}</Provider>;
  };
};

const UserProvider = createDataRoot();

const useUserData = () => {
  return useContext(context);
};

export { UserProvider, useUserData };
