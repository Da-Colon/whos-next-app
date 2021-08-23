import { IListStore, useListData } from "../../../context/ListContext";
import { EListViewStates } from "../../../context/ListContext/interfaces";
import DashboardWrapper from "./DashboardWrapper";
import './styles.scss'
const Dashboard = () => {
  const listsStore: IListStore = useListData();

  switch(listsStore.listViewState) {
    case EListViewStates.Card:
      return (
        <DashboardWrapper>
          
        </DashboardWrapper>
      )
    case EListViewStates.Table:
      return (
        <DashboardWrapper></DashboardWrapper>
      )
  }
}

export default Dashboard;