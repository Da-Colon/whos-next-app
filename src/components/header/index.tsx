import { FC } from "react";
import { IUserStore, useUserStore } from "../../context/UserContext";
import { ClientRoutes } from "../../router/routes";
import Link from "../UI/Link";
import AccountMenuButtons from "./AccountMenuButtons";
import PageLogo from "./PageLogo";
import "./styles.scss";

interface IHeader {
  isloggedIn: boolean;
  cookieHandler: () => void;
}

const Header: FC<IHeader> = ({ isloggedIn, cookieHandler }) => {
  const userStore: IUserStore = useUserStore();

  // TODO re-add logout
  return (
    <div className="header-container">
      <div className="header-center-nav">
        <Link
          isVisible={!!isloggedIn}
          classNames="header-center-nav-link"
          to={ClientRoutes.lists}
          text="Lists"
        />
        <PageLogo />
        <Link
          isVisible={!!isloggedIn}
          classNames="header-center-nav-link"
          to={ClientRoutes.picker('standard', userStore.userPreferences?.selectedList || "")}
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
