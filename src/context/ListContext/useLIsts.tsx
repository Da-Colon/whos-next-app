import { useCallback, useState } from "react";
import { IListProperties } from "../../pages/account/interfaces";
import { ServerRoutes } from "../../config/server";
import request from "../../request";
import { Routes } from "../../router/routes";

export interface INewList {
  listLength: number;
  name: string;
  list: any[];
  private: boolean;
}

export interface IUseLists {
  userLists: INewList[] | null;
  publicLists: INewList[] | null;
  selectedList: INewList | null;
  isListsLoaded: boolean;
  saveList: (properties: IListProperties, history: any) => Promise<void>;
  loadLists: () => void;
  updateList: (id: string) => Promise<void>;
  deleteList: (id: string) => Promise<void>;
}

const useLists = (): IUseLists => {
  const [userLists, setUserLists] = useState<INewList[] | null>(null);
  const [publicLists, setPublicLists] = useState<INewList[] | null>(null);
  const [selectedList, setSelectedList] = useState<INewList | null>(null);
  const [isListsLoaded, setLoaded] = useState(false);

  const loadLists = useCallback(async () => {
    await loadUserLists();
    await loadPublicLists();
    setLoaded(true);
  }, [])

  // load user lists
  const loadUserLists = async () => {
    const userLists = await request(ServerRoutes.getUserLists, "GET");
    setUserLists(userLists);
  };

  // load public lists
  const loadPublicLists = async () => {
    const publicList = await request(ServerRoutes.getPublicLists, "GET");
    setUserLists(publicList);
  };
  // set selected list
  const loadSelectedList = async (list: any) => {
    // TODO add userPeference table
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
    selectedList,
    isListsLoaded,
    saveList,
    loadLists,
    updateList,
    deleteList,
  };
};

export default useLists;
