import { IUserStore, useUserStore } from "../../../context/UserContext";
import { EAccountState } from "../../../context/UserContext/useAccountManagement";
import LoginChoices from "../shared/AccountChoices";
import LoginForm from "./LoginForm";
import "./styles.scss";

const LoginSteps = () => {
  const userStore: IUserStore = useUserStore();

  const redirectSignin = (option: EAccountState) => {
    userStore.updateSignupState(option);
    userStore.updateLoginState(EAccountState.None);
  };
  
  switch (userStore.loginState) {
    case EAccountState.Choose:
      return (
        <LoginChoices
          primaryPath="Login"
          secondaryPath="Sign up"
          primaryEmailAction={() =>
            userStore.updateLoginState(EAccountState.AccountForm)
          }
          primaryWeb3Action={() =>
            userStore.updateLoginState(EAccountState.Web3)
          }
          secondaryEmailAction={() => redirectSignin(EAccountState.AccountForm)}
          secondaryWeb3Action={() => redirectSignin(EAccountState.Web3)}
        />
      );
    case EAccountState.AccountForm:
      return <LoginForm />;
    case EAccountState.Web3:
      return <div></div>;
    case EAccountState.None:
      return null;
  }
};

export default LoginSteps;
