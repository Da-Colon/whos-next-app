import { Context, createContext, useContext } from "react";
import { IUseLists } from "./interfaces";
import useLists from "./useLIsts";

let context: Context<any>;

export interface IListStore extends IUseLists {}

const createDataRoot = () => {
  context = createContext(undefined);
  context.displayName = "Data Provider";
  const Provider = context.Provider;

  return ({ children }: { children: JSX.Element }) => {
    const listStore: IUseLists = useLists();
    const dataContext: IListStore = { ...listStore };

    return <Provider value={dataContext}>{children}</Provider>;
  };
};

const ListProvider = createDataRoot();

const useListData = () => {
  return useContext(context);
};

export { ListProvider, useListData };
