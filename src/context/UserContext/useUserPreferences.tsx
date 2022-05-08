import { useState } from "react";
import request from "../../request";
import { ServerRoutes } from "../../config/server";
import { useCallback } from "react";
import { LoadUserPreferences, UpdateSelectedList, UserPreferencesStore } from "../typescript/users.types";

const useUserPreferences = (): UserPreferencesStore => {
  const [userPreferences, setPreferences] = useState(null);

  const loadUserPreferences: LoadUserPreferences = useCallback(async () => {
    const preferences = await request(ServerRoutes.getUserPreferences, "GET");
    setPreferences(preferences);
  }, []);

  const updateSelectedList: UpdateSelectedList = async (listId) => {
    await request(ServerRoutes.putSelectedList(listId), "PUT");
    loadUserPreferences();
  };

  return { userPreferences, loadUserPreferences, updateSelectedList };
};

export default useUserPreferences;
