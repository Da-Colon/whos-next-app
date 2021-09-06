import { ClientRoutes } from "../../config/client";
import { IUserStore, useUserStore } from "../../context/UserContext";

import Link from "../layout/UI/Link";
import AccountMenuButtons from "./AccountMenuButtons";
import PageLogo from "./PageLogo";
import "./styles.scss";

interface IHeaderProps {
  isloggedIn: boolean;
  cookieHandler: () => void;
}

const Header = ({ isloggedIn, cookieHandler }: IHeaderProps) => {
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
