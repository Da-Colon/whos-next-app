import { useUserStore } from "../../../context/UserContext";
import SignupForm from "./SignupForm";
import LoginChoices from "../shared/AccountChoices";
import { UsersStore } from "../../../context/typescript/users.types";
import { AccountState } from "../../../context/typescript/users.enums";

const SignupSteps = () => {
  const userStore: UsersStore = useUserStore();

  const redirectLogin = (option: AccountState) => {
    userStore.updateLoginState(option);
    userStore.updateSignupState(AccountState.None);
  };
  switch (userStore.signupState) {
    case AccountState.Choose:
      return (
        <LoginChoices
          primaryPath="Sign up"
          secondaryPath="Login"
          primaryEmailAction={() => userStore.updateSignupState(AccountState.AccountForm)}
          primaryWeb3Action={() => userStore.updateSignupState(AccountState.Web3)}
          secondaryEmailAction={() => redirectLogin(AccountState.AccountForm)}
          secondaryWeb3Action={() => redirectLogin(AccountState.Web3)}
        />
      );
    case AccountState.AccountForm:
      return <SignupForm />;
    case AccountState.Web3:
      return <div></div>;
    case AccountState.None:
      return null;
  }
};

export default SignupSteps;
