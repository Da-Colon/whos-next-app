import { EListFilters, IListDetails } from "../../context/ListContext/interfaces";

// filter method for public lists
// @params (list: IListDetails) list to be filtered
export const publicFilter = (list: IListDetails) => !list.isPrivate;

// filter method for private lists
// @params (list: IListDetails) list to be filtered
export const privateFilter = (list: IListDetails) => list.isPrivate;

// accepts a filter and an array of rights and returns filtered list
// @params (filter: EListFilters) filter to apply to list
// @params (lists: IListDetails[]) array of lists to filter
export const listsFiltered = (filter: EListFilters, lists: IListDetails[] | null) => {
  return filter !== EListFilters.None
    ? lists?.filter((list) => (filter === EListFilters.Private ? privateFilter(list) : publicFilter(list)))
    : lists;
};