import { AccountState } from "../../../context/typescript/users.enums";
import { UsersStore } from "../../../context/typescript/users.types";
import { useUserStore } from "../../../context/UserContext";
import LoginChoices from "../shared/AccountChoices";
import LoginForm from "./LoginForm";
import "./styles.scss";

const LoginSteps = () => {
  const userStore: UsersStore = useUserStore();

  const redirectSignin = (option: AccountState) => {
    userStore.updateSignupState(option);
    userStore.updateLoginState(AccountState.None);
  };

  switch (userStore.loginState) {
    case AccountState.Choose:
      return (
        <LoginChoices
          primaryPath="Login"
          secondaryPath="Sign up"
          primaryEmailAction={() =>
            userStore.updateLoginState(AccountState.AccountForm)
          }
          primaryWeb3Action={() =>
            userStore.updateLoginState(AccountState.Web3)
          }
          secondaryEmailAction={() => redirectSignin(AccountState.AccountForm)}
          secondaryWeb3Action={() => redirectSignin(AccountState.Web3)}
        />
      );
    case AccountState.AccountForm:
      return <LoginForm />;
    case AccountState.Web3:
      return <div></div>;
    case AccountState.None:
      return null;
  }
};

export default LoginSteps;
