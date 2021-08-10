import { useState } from "react";
import { ServerRoutes } from "../../config/server";
import request from "../../request";
import { Routes } from "../../router/routes";

interface INewList {
  listLength: number;
  name: string;
  list: any[];
  private: boolean;
}

const useLists = () => {
  const [userLists, setUserLists] = useState([]);
  const [publicLists, setPublicLists] = useState([]);
  const [selectedList, setSelectedList] = useState({});

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
      if(response.message === 'success') {
        loadUserLists()
        history.replace(Routes.lists)
      }
      // TODO error handle
    } catch (err) {
      console.error("🚀 ~ request error:", err)
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
    saveList,
    updateList,
    deleteList,
  };
};

export default useLists;
