import { Context, createContext, useContext } from "react";
import { IAccountStore, useAccountManagement } from "./useAccountManagement";
import useUserPreferences, { IUserPreferencesStore } from "./useUserPreferences";
let context: Context<IUserContext>;

export interface IUserContext extends IAccountStore, IUserPreferencesStore {}

const createDataRoot = () => {
  context = createContext({} as IUserContext);
  context.displayName = "Data Provider";
  const Provider = context.Provider;

  return ({ children }: {children: JSX.Element}) => {
    const userStore: IAccountStore = useAccountManagement();
    const userPreferencesStore: IUserPreferencesStore = useUserPreferences();

    const dataContext = {
      ...userStore,
      ...userPreferencesStore
    };

    return <Provider value={dataContext}>{children}</Provider>;
  };
};

const UserProvider = createDataRoot();

const useUserData = () => {
  return useContext(context);
};

export { UserProvider, useUserData };
