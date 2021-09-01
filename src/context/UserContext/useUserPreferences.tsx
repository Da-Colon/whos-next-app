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
  loadUserPreferences: () => Promise<void>;
  updateSelectedList: (listId: string) => Promise<void>;
}

const useUserPreferences = (): IUserPreferencesStore => {
  const [userPreferences, setPreferences] = useState(null);

  const loadUserPreferences = useCallback(async () => {
    const preferences = await request(ServerRoutes.getUserPreferences, "GET");
    setPreferences(preferences);
  }, []);

  const updateSelectedList = async (listId: string) => {
    await request(ServerRoutes.putSelectedList(listId), "PUT");
    loadUserPreferences();
  };

  return { userPreferences, loadUserPreferences, updateSelectedList };
};

export default useUserPreferences;
