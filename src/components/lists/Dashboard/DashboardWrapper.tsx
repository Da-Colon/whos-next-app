import {
  faListAlt,
  faTable,
  faUnlock,
  faUserLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

const DashboardWrapper = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="dashboard-header-container">
      <div className="dashboard-header-icon-wrapper">
        <p>Filters</p>
        <div className="dashboard-header-icon-container">
          <FontAwesomeIcon
            className="dashboard-header-icon"
            icon={faUserLock}
          />
          <FontAwesomeIcon className="dashboard-header-icon" icon={faUnlock} />
        </div>
      </div>
      <div className="dashboard-header-icon-wrapper">
        <p>Views</p>
        <div className="dashboard-header-icon-container">
          <FontAwesomeIcon className="dashboard-header-icon" icon={faTable} />
          <FontAwesomeIcon className="dashboard-header-icon" icon={faListAlt} />
        </div>
      </div>
      {children}
    </div>
  );
};

export default DashboardWrapper;
