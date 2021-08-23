import { IListStore, useListData } from "../../../context/ListContext";
import {
  EListFilters,
  EListViewStates,
  IListDetails,
} from "../../../context/ListContext/interfaces";
import Loader from "../../layout/Loader";
import DashboardWrapper from "./DashboardWrapper";
import ListsCardView from "./ListsCardView";
import ListsTableView from "./ListsTableView";
import "./styles.scss";

const publicFilter = (list: IListDetails) => !list.private;
const privateFilter = (list: IListDetails) => list.private;

const listsFiltered = (filter: EListFilters, lists: IListDetails[] | null) => {
  return filter !== EListFilters.None
    ? lists?.filter((list) =>
        filter === EListFilters.Private
          ? privateFilter(list)
          : publicFilter(list)
      )
    : lists;
};

const Dashboard = () => {
  const listsStore: IListStore = useListData();

  const userLists = listsFiltered(listsStore.listFilter, listsStore.userLists);
  if (!userLists) {
    return <Loader />;
  }
  switch (listsStore.listViewState) {
    case EListViewStates.Card:
      return (
        <DashboardWrapper>
          <ListsCardView lists={userLists} />
        </DashboardWrapper>
      );
    case EListViewStates.Table:
      return (
        <DashboardWrapper>
          <ListsTableView lists={userLists} />
        </DashboardWrapper>
      );
  }
};

export default Dashboard;
