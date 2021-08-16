import { Context, createContext, useContext } from "react";
import useLists, { IUseLists } from "./useLIsts";

let context: Context<any>;

export interface IListContext extends IUseLists {}

const createDataRoot = () => {
  context = createContext(undefined);
  context.displayName = "Data Provider";
  const Provider = context.Provider;

  return ({ children }: { children: JSX.Element }) => {
    const listStore: IUseLists = useLists();
    const dataContext: IListContext = { ...listStore };

    return <Provider value={dataContext}>{children}</Provider>;
  };
};

const ListProvider = createDataRoot();

const useListData = () => {
  return useContext(context);
};

export { ListProvider, useListData };
