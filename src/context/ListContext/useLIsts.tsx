import { useCallback, useState } from "react";
import { ServerRoutes } from "../../config/server";
import request from "../../request";
import { Routes } from "../../router/routes";

export interface Ilist {
  name: string;
}

export interface INewList {
  name: string;
  list: Ilist[];
  private: boolean;
  listLength?: number;
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  userId?: string;
}

export interface IUseLists {
  userLists: INewList[] | null;
  publicLists: INewList[] | null;
  isListsLoaded: boolean;
  saveList: (properties: IListProperties, history: any) => Promise<void>;
  loadLists: () => void;
  updateList: (id: string) => Promise<void>;
  deleteList: (id: string) => Promise<void>;
}

export interface IListProperties {
  listLength: number,
  name: string,
  private: boolean,
  list: any[],
}

const useLists = (): IUseLists => {
  const [userLists, setUserLists] = useState<INewList[] | null>(null);
  const [publicLists, setPublicLists] = useState<INewList[] | null>(null);
  const [isListsLoaded, setLoaded] = useState(false);


  const loadLists = useCallback(async () => {
    await loadUserLists();
    await loadPublicLists();
    setLoaded(true);
  }, []);

  // load user lists
  const loadUserLists = async () => {
    const userLists = await request(ServerRoutes.getUserLists, "GET");
    if (userLists?.message) {
      console.warn(userLists?.message);
    } else {
      setUserLists(userLists);
    }
  };

  // load public lists
  const loadPublicLists = async () => {
    const publicList = await request(ServerRoutes.getPublicLists, "GET");
    if (publicList?.message) {
      console.warn(publicList?.message);
    } else {
      setPublicLists(publicList);
    }
  };

  // save new list
  const saveList = async (properties: INewList, history: any) => {
    try {
      const body = {
        name: properties.name,
        private: properties.private,
        list: properties.list,
      };
      const response = await request(ServerRoutes.saveList, "POST", body);
      if (response.message === "success") {
        loadUserLists();
        history.replace(Routes.lists);
      }
      // TODO error handle
    } catch (err) {
      console.error("🚀 ~ request error:", err);
    }

    // // TODO update properties
    // // TODO error handling
  };

  // update current list
  const updateList = async (id: string) => {
    const response = await request(ServerRoutes.updateList(id), "PUT");
    console.log(response);
  };

  // delete a list
  const deleteList = async (id: string) => {
    const response = await request(ServerRoutes.deleteList(id), "DELETE");
    console.log(response);
  };

  return {
    userLists,
    publicLists,
    isListsLoaded,
    saveList,
    loadLists,
    updateList,
    deleteList,
  };
};

export default useLists;
