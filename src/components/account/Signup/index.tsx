import { IUserContext, useUserData } from "../../../context/UserContext"
import { ESignupState } from "../../../context/UserContext/useAccountManagement";

const LoginSteps = () => {
  const userStore: IUserContext = useUserData();
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