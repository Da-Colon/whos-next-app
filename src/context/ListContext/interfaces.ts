export interface Ilist {
  name: string;
}

export interface IListDetails {
  name: string;
  list: Ilist[];
  likes: number;
  private: boolean;
  listLength?: number;
  id?: string;
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
  updateList: (id: string) => Promise<void>;
  deleteList: (id: string) => Promise<void>;
  updateListViewState: (viewState: EListViewStates) => void;
  updateFilter: (filter: EListFilters) => void;
}

export interface IListProperties {
  listLength: number,
  name: string,
  private: boolean,
  list: any[],
  likes: number,
}

export enum EListViewStates {
  Table,
  Card,
  // Web 3 (Full data + NFT?)
}

export enum EListFilters {
  Private,
  Public,
  None
}