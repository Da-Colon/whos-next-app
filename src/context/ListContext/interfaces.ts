export interface Ilist {
  name: string;
}

export interface INewList {
  name: string;
  list: Ilist[];
  private: boolean;
  listLength?: number;
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  userId?: string;
}

export interface IUseLists {
  userLists: INewList[] | null;
  publicLists: INewList[] | null;
  isListsLoaded: boolean;
  listViewState: EListViewStates;
  saveList: (properties: IListProperties, history: any) => Promise<void>;
  loadLists: () => void;
  updateList: (id: string) => Promise<void>;
  deleteList: (id: string) => Promise<void>;
  updateListViewState: (viewState: EListViewStates) => void;
}

export interface IListProperties {
  listLength: number,
  name: string,
  private: boolean,
  list: any[],
}

export enum EListViewStates {
  Table,
  Card,
  // Web 3 (Full data + NFT?)
}