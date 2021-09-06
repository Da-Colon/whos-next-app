import {
  faArrowLeft,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { ClientRoutes } from "../../../config/client";

export enum ENavigationType {
  State,
  Nav,
}

const TitleAndNavigation = ({
  pageTitle,
  variant,
  backAction,
}: {
  variant: ENavigationType;
  pageTitle: string;
  backAction?: () => void;
}) => {
  switch (variant) {
    case ENavigationType.State: {
      return (
        <div className="list-form-header">
          <button type="button" onClick={backAction}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <FontAwesomeIcon icon={faEllipsisV} />
          <div className="list-form-heading">{pageTitle}</div>
        </div>
      );
    }
    case ENavigationType.Nav: {
      return (
        <div className="list-form-header">
          <NavLink to={ClientRoutes.lists}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </NavLink>
          <FontAwesomeIcon icon={faEllipsisV} />
          <div className="list-form-heading">{pageTitle}</div>
        </div>
      );
    }
  }
};

export default TitleAndNavigation;
