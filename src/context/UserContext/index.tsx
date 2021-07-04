import { Context, createContext, useContext } from "react";
import { IFormProperties } from "../../components/pages/account/interfaces";
import { TVoidFunction } from "../../constants/types";
import { useAccountManagement } from "./useAccountManagement";
let context: Context<any>;

export interface IUserContext {
  user: {},
  logggedIn: boolean,
  error: string,
  userSignin: (values: IFormProperties) => string,
  userSignup: (values: IFormProperties) => boolean,
  userLogout: (cookieHandler: TVoidFunction) => void,
  clearError: TVoidFunction
}

const createDataRoot = () => {
  context = createContext(undefined);
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
  return useContext<IUserContext>(context);
};

export { UserProvider, useUserData };
