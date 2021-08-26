import {
  faLayerGroup,
  faListAlt,
  faPlus,
  faTable,
  faUnlock,
  faUserLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { IListStore, useListData } from "../../../context/ListContext";
import {
  EListFilters,
  EListViewStates,
} from "../../../context/ListContext/interfaces";
import { ClientRoutes } from "../../../router/routes";
import { Tooltip } from "../../UI/Tooltip";
import classnames from "classnames";

const DashboardWrapper = ({ children }: { children?: ReactNode }) => {
  const listsStore: IListStore = useListData();
  return (
    <div>
      <div className="dashboard-header-container">
        <NavLink
          to={ClientRoutes.listsNew}
          className="dashboard-header-container-lists-new"
        >
          <div className="lists-new">New</div>
          <FontAwesomeIcon className="dashboard-header-icon" icon={faPlus} />
        </NavLink>
        <div className="dashboard-header-icon-wrapper">
          <p>Filters</p>
          <div className="dashboard-header-icon-container">
            <FontAwesomeIcon
              className={classnames("dashboard-header-icon icon-effects__all", {
                "icon-effects__highlight":
                  listsStore.listFilter === EListFilters.None,
              })}
              icon={faLayerGroup}
              data-tip="All lists"
              data-for="filter-all"
              onClick={() => listsStore.updateFilter(EListFilters.None)}
            />
            <Tooltip id="filter-all" />
            <FontAwesomeIcon
              className={classnames(
                "dashboard-header-icon icon-effects__lock",
                {
                  "icon-effects__highlight":
                    listsStore.listFilter === EListFilters.Private,
                }
              )}
              icon={faUserLock}
              data-tip="Private lists only"
              data-for="filter-lock"
              onClick={() => listsStore.updateFilter(EListFilters.Private)}
            />
            <Tooltip id="filter-lock" />
            <FontAwesomeIcon
              className={classnames(
                "dashboard-header-icon icon-effects__unlock",
                {
                  "icon-effects__highlight":
                    listsStore.listFilter === EListFilters.Public,
                }
              )}
              icon={faUnlock}
              data-tip="Public lists only"
              data-for="filter-unlock"
              onClick={() => listsStore.updateFilter(EListFilters.Public)}
            />
            <Tooltip id="filter-unlock" />
          </div>
        </div>
        <div className="dashboard-header-icon-wrapper">
          <p>Views</p>
          <div className="dashboard-header-icon-container">
            <FontAwesomeIcon
              className={classnames(
                "dashboard-header-icon icon-effects__list",
                {
                  "icon-effects__highlight":
                    listsStore.listViewState === EListViewStates.Card,
                }
              )}
              icon={faListAlt}
              data-tip="Card view"
              data-for="view-card"
              onClick={() =>
                listsStore.updateListViewState(EListViewStates.Card)
              }
            />
            <Tooltip id="view-card" />
            <FontAwesomeIcon
              className={classnames(
                "dashboard-header-icon icon-effects__table", 
                {
                  "icon-effects__highlight":
                    listsStore.listViewState === EListViewStates.Table,
                }
                )}
              icon={faTable}
              data-tip="Table view"
              data-for="view-table"
              onClick={() =>
                listsStore.updateListViewState(EListViewStates.Table)
              }
            />
            <Tooltip id="view-table" />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default DashboardWrapper;
