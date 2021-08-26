export interface Ilist {
  name: string;
}

export interface IListDetails {
  name: string;
  list: Ilist[];
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
  saveList: (properties: IListProperties, history: any) => Promise<void>;
  loadLists: () => void;
  updateListProperties: (
    id: string,
    properties: {
      name?: string;
      private?: boolean;
      list?: Ilist;
      likes?: number;
    }
  ) => Promise<void>;
  deleteList: (id: string) => Promise<void>;
  updateListViewState: (viewState: EListViewStates) => void;
  updateFilter: (filter: EListFilters) => void;
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
  list?: Ilist;
  likes?: number;
  id?: string;
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
