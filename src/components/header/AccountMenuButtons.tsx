import { Routes } from "../../router/routes";
import { FC } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { IUserContext, useUserData } from "../../context/UserContext";
import { ELoginState } from "../../context/UserContext/useAccountManagement";

const AccountMenuButtons: FC<{
  isLoggedIn: boolean;
  cookieHandler: () => void;
}> = ({ isLoggedIn, cookieHandler }) => {

  const history = useHistory();
  const userStore: IUserContext = useUserData();

  const logout = () => {
    userStore.userLogout(cookieHandler);
    history.push("/");
  };

  const loginInit = () => {
    userStore.updateLoginState(ELoginState.Choose)
  }
  
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
      <div onClick={loginInit}>Login</div>
    </div>
  );
};

export default AccountMenuButtons;
