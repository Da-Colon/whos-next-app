import { Context, createContext, useContext } from "react";
import { AccountStore, UserPreferencesStore, UsersStore } from "../typescript/users.types";
import { useAccountManagement } from "./useAccountManagement";
import useUserPreferences from "./useUserPreferences";
let context: Context<UsersStore>;

const createDataRoot = () => {
  context = createContext({} as UsersStore);
  context.displayName = "Data Provider";
  const Provider = context.Provider;

  return ({ children }: {children: JSX.Element}) => {
    const userStore: AccountStore = useAccountManagement();
    const userPreferencesStore: UserPreferencesStore = useUserPreferences();

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
