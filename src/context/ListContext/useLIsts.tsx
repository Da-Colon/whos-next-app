import { useCallback, useState } from "react";
import { ServerRoutes } from "../../config/server";
import request from "../../request";
import {
  ECreateListSteps,
  EListFilters,
  EListViewStates,
  IListDetails,
  ISanitizeListProperties,
  IUseLists,
} from "./interfaces";
import { sanitizeListProperties } from "./listContext.utils";

const useLists = (): IUseLists => {
  // store lists
  const [userLists, setUserLists] = useState<IListDetails[]>([]);
  const [publicLists, setPublicLists] = useState<IListDetails[]>([]);
  // list screen views and filters
  const [listViewState, setListViewState] = useState(EListViewStates.Card);
  const [listFilter, setListFilter] = useState(EListFilters.None);
  const [deleteListId, setDeleteListId] = useState<null | string>(null);
  // create list states
  const [createListState, setCreateListState] = useState(
    ECreateListSteps.NameAndSettings
  );
  // store state vairables
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
  const saveList = async (properties: IListDetails) => {
    try {
      const body = {
        name: properties.name,
        isPrivate: properties.isPrivate,
        list: properties.list,
      };
      const response = await request(ServerRoutes.saveList, "POST", body);
      if (response.message === "success") {
        loadUserLists();
        return response.message;
      } else return "failed";
      // TODO error handle
    } catch (err) {
      console.error("🚀 ~ request error:", err);
      return "failed";
    }
  };
  // update properties
  const updateListProperties = async (
    id: string,
    properties: ISanitizeListProperties
  ) => {
    const sanitizedProperties = sanitizeListProperties(properties);
    const response = await request(
      ServerRoutes.updateList(id),
      "PUT",
      sanitizedProperties
    );
    console.log(response);
  };

  // delete a list

  const updateShowListDeleteModal = (id: string | null) => {
    setDeleteListId(id);
  };
  const deleteList = async (id: string) => {
    const response = await request(ServerRoutes.deleteList(id), "DELETE");
    return response
  };

  // update UI view

  const updateListViewState = (viewState: EListViewStates) => {
    setListViewState(viewState);
  };

  const updateFilter = (filter: EListFilters) => {
    setListFilter(filter);
  };

  const updateCreateListState = (step: ECreateListSteps) => {
    setCreateListState(step);
  };

  return {
    userLists,
    publicLists,
    isListsLoaded,
    listViewState,
    listFilter,
    createListState,
    deleteListId,
    saveList,
    loadLists,
    updateListProperties,
    updateFilter,
    deleteList,
    updateListViewState,
    updateCreateListState,
    updateShowListDeleteModal,
  };
};

export default useLists;
