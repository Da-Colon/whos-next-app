import { useCallback, useState } from "react";
import { ServerRoutes } from "../../config/server";
import request from "../../request";
import { Routes } from "../../router/routes";
import { INewList, IUseLists } from "./interfaces";

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
