import { ClientRoutes } from "../../config/client";
import { UsersStore } from "../../context/typescript/users.types";
import { useUserStore } from "../../context/UserContext";

import Link from "../layout/UI/Link";
import AccountMenuButtons from "./AccountMenuButtons";
import PageLogo from "./PageLogo";
import "./styles.scss";

interface HeaderProps {
  isloggedIn: boolean;
  cookieHandler: () => void;
}

const Header = ({ isloggedIn, cookieHandler }: HeaderProps) => {
  const userStore: UsersStore = useUserStore();

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
          to={ClientRoutes.picker("standard", userStore.userPreferences?.selectedList || "")}
          text="Picker"
        />
      </div>
      <AccountMenuButtons isLoggedIn={!!isloggedIn} cookieHandler={cookieHandler} />
    </div>
  );
};

export default Header;
