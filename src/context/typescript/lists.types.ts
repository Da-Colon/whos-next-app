import { ECreateListSteps, EListFilters, EListViewStates } from "./lists.enums";

export type SaveList = (properties: ListFormProps) => Promise<string>;
export type LoadList = () => void;
export type UpdateListProperties = (id: string, properties: SanitizedListProps) => Promise<void>;
export type DeleteList = (id: string) => Promise<{ error?: string; message?: string }>;
export type UpdateListViewState = (viewState: EListViewStates) => void;
export type UpdateFilter = (filter: EListFilters) => void;
export type UpdateCreateListState = (state: ECreateListSteps) => void;
export type UpdateShowListDeleteModal = (id: string | null) => void;
export type SanitizeListProperties = (properties: {
  isPrivate?: boolean;
  name?: string;
  list?: ListProps[];
  likes?: number;
}) => SanitizedListProps;

export interface ListsStore extends UseLists {}

export interface UseLists {
  userLists: ListDetails[];
  publicLists: ListDetails[];
  isListsLoaded: boolean;
  listViewState: EListViewStates;
  listFilter: EListFilters;
  createListState: ECreateListSteps;
  deleteListId: string | null;
  saveList: SaveList;
  loadLists: LoadList;
  updateListProperties: UpdateListProperties;
  deleteList: DeleteList;
  updateListViewState: UpdateListViewState;
  updateFilter: UpdateFilter;
  updateCreateListState: UpdateCreateListState;
  updateShowListDeleteModal: UpdateShowListDeleteModal;
}

export interface ListProps {
  name: string;
}

export interface ListDetails {
  name: string;
  list: ListProps[];
  likes: number;
  isPrivate: boolean;
  listLength?: number;
  id: string;
  createdAt?: string;
  updatedAt?: string;
  userId?: string;
}

export interface ListFormProps {
  id: string;
  name: string;
  isPrivate: boolean;
  list: ListProps[];
  likes: number;
}

export interface SanitizedListProps {
  name?: string;
  isPrivate?: boolean;
  list?: ListProps[];
  likes?: number;
  id?: string;
}
