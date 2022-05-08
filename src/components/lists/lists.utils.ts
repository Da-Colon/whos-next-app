
// filter method for public lists

import { EListFilters } from "../../context/typescript/lists.enums";
import { ListDetails } from "../../context/typescript/lists.types";

// @params (list: ListDetails) list to be filtered
export const publicFilter = (list: ListDetails) => !list.isPrivate;

// filter method for private lists
// @params (list: ListDetails) list to be filtered
export const privateFilter = (list: ListDetails) => list.isPrivate;

// accepts a filter and an array of rights and returns filtered list
// @params (filter: EListFilters) filter to apply to list
// @params (lists: ListDetails[]) array of lists to filter
export const listsFiltered = (filter: EListFilters, lists: ListDetails[] | null) => {
  return filter !== EListFilters.None
    ? lists?.filter((list) => (filter === EListFilters.Private ? privateFilter(list) : publicFilter(list)))
    : lists;
};