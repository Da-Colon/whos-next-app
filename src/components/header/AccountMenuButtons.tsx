import { FC } from "react";
import { useHistory } from "react-router-dom";
import { IUserStore, useUserStore } from "../../context/UserContext";
import { EAccountState } from "../../context/UserContext/useAccountManagement";

const AccountMenuButtons: FC<{
  isLoggedIn: boolean;
  cookieHandler: () => void;
}> = ({ isLoggedIn, cookieHandler }) => {

  const history = useHistory();
  const userStore: IUserStore = useUserStore();

  const logout = () => {
    userStore.userLogout(cookieHandler);
    history.push("/");
  };

  const loginInit = () => {
    userStore.updateLoginState(EAccountState.Choose)
  }
  
  if (isLoggedIn) {
    return (
      <div className="account-menu-button">
        {/* <div onClick={logout}>{userStore.user?.email}</div> */}
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
