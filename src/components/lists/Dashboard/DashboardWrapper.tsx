import {
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
import { EListFilters } from "../../../context/ListContext/interfaces";
import { ClientRoutes } from "../../../router/routes";

const DashboardWrapper = ({ children }: { children?: ReactNode }) => {
  const listsStore: IListStore = useListData();
  return (
    <div>
    <div className="dashboard-header-container">
      <div className="dashboard-header-container-lists-new">
        <div className="lists-new">New</div>
        <NavLink to={ClientRoutes.listsNew}>
          <FontAwesomeIcon className="dashboard-header-icon" icon={faPlus} />
        </NavLink>
      </div>
      <div className="dashboard-header-icon-wrapper">
        <p>Filters</p>
        <div className="dashboard-header-icon-container">
          <FontAwesomeIcon
            className="dashboard-header-icon"
            icon={faUserLock}
            onClick={() => listsStore.updateFilter(EListFilters.Private)}
          />
          <FontAwesomeIcon
            className="dashboard-header-icon"
            icon={faUnlock}
            onClick={() => listsStore.updateFilter(EListFilters.Public)}
          />
        </div>
      </div>
      <div className="dashboard-header-icon-wrapper">
        <p>Views</p>
        <div className="dashboard-header-icon-container">
          <FontAwesomeIcon className="dashboard-header-icon" icon={faTable} />
          <FontAwesomeIcon className="dashboard-header-icon" icon={faListAlt} />
        </div>
      </div>
    </div>
      {children}
    </div>
  );
};

export default DashboardWrapper;
