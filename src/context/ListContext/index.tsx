import { Context, createContext, useContext } from "react";
import { IListProperties } from "../../components/pages/account/interfaces";
import useLists from "./useLIsts";

let context: Context<any>;
export interface IListContext {
  userLists: never[];
  publicLists: never[];
  selectedList: {};
  saveList: (properties: IListProperties, history: any) => Promise<void>;
  updateList: (id: string) => Promise<void>;
  deleteList: (id: string) => Promise<void>;
}

const createDataRoot = () => {
  context = createContext(undefined);
  context.displayName = "Data Provider";
  const Provider = context.Provider;

  return ({ children }: { children: JSX.Element }) => {
    const {
      userLists,
      publicLists,
      selectedList,
      saveList,
      updateList,
      deleteList,
    } = useLists();
    const dataContext: IListContext = {
      userLists,
      publicLists,
      selectedList,
      saveList,
      updateList,
      deleteList,
    };

    return <Provider value={dataContext}>{children}</Provider>;
  };
};

const ListProvider = createDataRoot();

const useListData = () => {
  return useContext(context);
};

export { ListProvider, useListData };
