import { IUserStore, useUserStore } from "../../../context/UserContext"
import { EAccountState } from "../../../context/UserContext/useAccountManagement";

const LoginSteps = () => {
  const userStore: IUserStore = useUserStore();
  switch(userStore.signupState) {
    case EAccountState.Choose: 
      return (
        <div></div>
      )
    case EAccountState.AccountForm: 
      return (
        <div></div>
      )
    case EAccountState.Web3: 
      return (
        <div></div>
      )
    case EAccountState.None: 
      return null;
  }
}

export default LoginSteps