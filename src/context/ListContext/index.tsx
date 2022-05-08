import { Context, createContext, useContext } from "react";
import { ListsStore, UseLists } from "../typescript/lists.types";
import useLists from "./useLIsts";

let context: Context<any>;

const createDataRoot = () => {
  context = createContext(undefined);
  context.displayName = "Data Provider";
  const Provider = context.Provider;

  return ({ children }: { children: JSX.Element }) => {
    const listStore: UseLists = useLists();
    const dataContext: ListsStore = { ...listStore };

    return <Provider value={dataContext}>{children}</Provider>;
  };
};

const ListProvider = createDataRoot();

const useListStore = () => {
  return useContext(context);
};

export { ListProvider, useListStore };
