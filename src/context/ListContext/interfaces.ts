export interface IList {
  name: string;
}

export interface IListDetails {
  name: string;
  list: IList[];
  likes: number;
  isPrivate: boolean;
  listLength?: number;
  id: string;
  createdAt?: string;
  updatedAt?: string;
  userId?: string;
}


export interface IUseLists {
  userLists: IListDetails[] | null;
  publicLists: IListDetails[] | null;
  isListsLoaded: boolean;
  listViewState: EListViewStates;
  listFilter: EListFilters;
  createListState: ECreateListSteps;
  deleteListId: null | string;
  saveList: (properties: IListProperties) => Promise<string>;
  loadLists: () => void;
  updateListProperties: (
    id: string,
    properties: ISanitizeListProperties
  ) => Promise<void>;
  deleteList: (id: string) => Promise<{error?: string, message?: string}>;
  updateListViewState: (viewState: EListViewStates) => void;
  updateFilter: (filter: EListFilters) => void;
  updateCreateListState: (state: ECreateListSteps) => void;
  updateShowListDeleteModal: (id: string | null) => void;
}

export interface IListProperties {
  id: string;
  name: string;
  isPrivate: boolean;
  list: any[];
  likes: number;
}

export interface ISanitizeListProperties {
  name?: string;
  isPrivate?: boolean;
  list?: IList[];
  likes?: number;
  id?: string;
}

export interface IListPropertiesError {
  id: string;
  name: string;
  isPrivate: string;
  list: string;
  likes: string;
}

export enum EListViewStates {
  Table,
  Card,
  // Web 3 (Full data + NFT?)
}

export enum EListFilters {
  Private,
  Public,
  None,
}

export enum ECreateListSteps {
  CreationMethod,
  NameAndSettings,
  Upload,
  ListCreation,
  Review,
}