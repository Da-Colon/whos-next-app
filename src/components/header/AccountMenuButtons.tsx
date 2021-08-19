import { Routes } from "../../router/routes";
import { FC } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useUserData } from "../../context/UserContext";

const AccountMenuButtons: FC<{
  isLoggedIn: boolean;
  cookieHandler: () => void;
}> = ({ isLoggedIn, cookieHandler }) => {

  const history = useHistory();
  const { userLogout } = useUserData();

  const logout = () => {
    userLogout(cookieHandler);
    history.push("/");
  };
  
  if (isLoggedIn) {
    return (
      <div className="account-menu-button">
        <div onClick={logout}>Logout</div>
      </div>
    );
  }
  // TODO add web3 login
  return (
    <div className="account-menu-button">
      <NavLink to={Routes.login}>Login</NavLink>
    </div>
  );
};

export default AccountMenuButtons;
