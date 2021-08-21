import { Context, createContext, useContext } from "react";
import { IAccountStore, useAccountManagement } from "./useAccountManagement";
import useUserPreferences, { IUserPreferencesStore } from "./useUserPreferences";
let context: Context<IUserStore>;

export interface IUserStore extends IAccountStore, IUserPreferencesStore {}

const createDataRoot = () => {
  context = createContext({} as IUserStore);
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

const useUserStore = () => {
  return useContext(context);
};

export { UserProvider, useUserStore };
