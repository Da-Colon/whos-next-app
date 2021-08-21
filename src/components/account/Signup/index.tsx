import { IUserStore, useUserStore } from "../../../context/UserContext"
import { ESignupState } from "../../../context/UserContext/useAccountManagement";

const LoginSteps = () => {
  const userStore: IUserStore = useUserStore();
  switch(userStore.signupState) {
    case ESignupState.Choose: 
      return (
        <div></div>
      )
    case ESignupState.AccountForm: 
      return (
        <div></div>
      )
    case ESignupState.Web3: 
      return (
        <div></div>
      )
    case ESignupState.None: 
      return null;
  }
}

export default LoginSteps