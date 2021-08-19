import { FC } from "react";
import { Routes } from "../../router/routes";
import Link from "../UI/Link";
import AccountMenuButtons from "./AccountMenuButtons";
import PageLogo from "./PageLogo";
import "./styles.scss";

interface IHeader {
  isloggedIn: boolean;
  cookieHandler: () => void;
}

const Header: FC<IHeader> = ({ isloggedIn, cookieHandler }) => {
  // TODO re-add logout
  return (
    <div className="header-container">
      <div className="header-center-nav">
        <Link
          isVisible={!!isloggedIn}
          classNames="header-center-nav-link"
          to={Routes.lists}
          text="Lists"
        />
        <PageLogo />
        <Link
          isVisible={!!isloggedIn}
          classNames="header-center-nav-link"
          to={Routes.picker}
          text="Picker"
        />
      </div>
      <AccountMenuButtons
        isLoggedIn={!!isloggedIn}
        cookieHandler={cookieHandler}
      />
    </div>
  );
};

export default Header;
