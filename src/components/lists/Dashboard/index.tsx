import { IListStore, useListStore } from "../../../context/ListContext";
import { EListViewStates } from "../../../context/ListContext/interfaces";
import { listsFiltered } from "../lists.utils";
import DashboardWrapper from "./DashboardWrapper";
import ListsCardView from "./ListsCardView";
import ListsTableView from "./ListsTableView";
import "./styles.scss";

const Dashboard = () => {
  const listsStore: IListStore = useListStore();

  const userLists = listsFiltered(listsStore.listFilter, listsStore.userLists);
  if (!userLists) {
    return <div>...</div>;
  }
  switch (listsStore.listViewState) {
    case EListViewStates.Card:
      return (
        <DashboardWrapper>
          <ListsCardView lists={userLists} isUserLists />
        </DashboardWrapper>
      );
    case EListViewStates.Table:
      return (
        <DashboardWrapper>
          <ListsTableView lists={userLists} isUserLists />
        </DashboardWrapper>
      );
  }
};

export default Dashboard;
