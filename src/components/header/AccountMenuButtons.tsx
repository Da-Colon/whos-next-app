import { useHistory } from "react-router-dom";
import { AccountState } from "../../context/typescript/users.enums";
import { UsersStore } from "../../context/typescript/users.types";
import { useUserStore } from "../../context/UserContext";

interface AccountMenuButtonsProps {
  isLoggedIn: boolean;
  cookieHandler: () => void;
}

const AccountMenuButtons = ({ isLoggedIn, cookieHandler }: AccountMenuButtonsProps) => {

  const history = useHistory();
  const userStore: UsersStore = useUserStore();

  const logout = () => {
    userStore.userLogout(cookieHandler);
    history.push("/");
  };

  const loginInit = () => {
    userStore.updateLoginState(AccountState.Choose)
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
