import { useState } from "react";
import request from "../../request";
import { ServerRoutes } from "../../config/server";
import { useCallback } from "react";

interface IUserPreferences {
  selectedList: string;
  likedLists: string[];
  userId: string;
}

export interface IUserPreferencesStore {
  userPreferences: null | IUserPreferences;
  getUserPreferences: () => Promise<void>;
  updateSelectedList: (listId: string) => Promise<void>;
}

const useUserPreferences = (): IUserPreferencesStore => {
  const [userPreferences, setPreferences] = useState(null);

  const getUserPreferences = useCallback(async () => {
    const preferences = await request(ServerRoutes.getUserPreferences, "GET");
    setPreferences(preferences);
  }, []);

  const updateSelectedList = async (listId: string) => {
    console.log('here')
    await request(ServerRoutes.putSelectedList(listId), "PUT");
    getUserPreferences();
  };

  return { userPreferences, getUserPreferences, updateSelectedList };
};

export default useUserPreferences;
