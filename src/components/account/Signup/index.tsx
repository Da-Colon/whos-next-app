import { IUserStore, useUserStore } from "../../../context/UserContext"
import { EAccountState } from "../../../context/UserContext/useAccountManagement";
import SignupForm from "./SignupForm";
import LoginChoices from "../shared/AccountChoices";

const SignupSteps = () => {
  const userStore: IUserStore = useUserStore();

  const redirectLogin = (option: EAccountState) => {
    userStore.updateLoginState(option);
    userStore.updateSignupState(EAccountState.None);
  };
  switch(userStore.signupState) {
    case EAccountState.Choose: 
      return (
        <LoginChoices
          primaryPath="Sign up"
          secondaryPath="Login"
          primaryEmailAction={() =>
            userStore.updateSignupState(EAccountState.AccountForm)
          }
          primaryWeb3Action={() =>
            userStore.updateSignupState(EAccountState.Web3)
          }
          secondaryEmailAction={() => redirectLogin(EAccountState.AccountForm)}
          secondaryWeb3Action={() => redirectLogin(EAccountState.Web3)}
        />
      )
    case EAccountState.AccountForm: 
      return <SignupForm />
    case EAccountState.Web3: 
      return (
        <div></div>
      )
    case EAccountState.None: 
      return null;
  }
}

export default SignupSteps