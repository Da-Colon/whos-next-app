export interface IList {
  name: string;
}

export interface IListDetails {
  name: string;
  list: IList[];
  likes: number;
  private: boolean;
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
  saveList: (properties: IListProperties) => Promise<string>;
  loadLists: () => void;
  updateListProperties: (
    id: string,
    properties: {
      name?: string;
      private?: boolean;
      list?: IList;
      likes?: number;
    }
  ) => Promise<void>;
  deleteList: (id: string) => Promise<void>;
  updateListViewState: (viewState: EListViewStates) => void;
  updateFilter: (filter: EListFilters) => void;
  updateCreateListState: (state: ECreateListSteps) => void;
}

export interface IListProperties {
  id: string;
  name: string;
  private: boolean;
  list: any[];
  likes: number;
}

export interface ISanitizeListProperties {
  name?: string;
  private?: boolean;
  list?: IList;
  likes?: number;
  id?: string;
}

export interface IListPropertiesError {
  id: string;
  name: string;
  private: string;
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