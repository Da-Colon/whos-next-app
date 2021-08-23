import { IListStore, useListData } from "../../../context/ListContext";
import { EListFilters, EListViewStates, IListDetails } from "../../../context/ListContext/interfaces";
import Loader from "../../layout/Loader";
import DashboardWrapper from "./DashboardWrapper";
import ListsCardView from "./ListsCardView";
import ListsTableView from "./ListsTableView";
import './styles.scss'

const publicFilter = (list: IListDetails) => !list.private;
const privateFilter = (list: IListDetails) => list.private;

const listsFiltered = (filter: EListFilters, lists: IListDetails[] | null) => {
  return filter !== EListFilters.None
  ? lists?.filter((list) =>
      EListFilters.Private ? privateFilter(list) : publicFilter(list)
    )
  : lists;
}

const Dashboard = () => {
  const listsStore: IListStore = useListData();

const userLists = listsFiltered(listsStore.listFilter, listsStore.userLists);
console.log("🚀 ~ file: index.tsx ~ line 24 ~ Dashboard ~ userLists", userLists)
  if(!userLists) {
    return (
      <Loader />
    )
  }
  switch(listsStore.listViewState) {
    case EListViewStates.Card:
      return (
        <DashboardWrapper>
          <ListsCardView userLists={userLists}/>
        </DashboardWrapper>
      )
    case EListViewStates.Table:
      return (
        <DashboardWrapper>
          <ListsTableView userLists={userLists}/>
        </DashboardWrapper>
      )
  }
}

export default Dashboard;