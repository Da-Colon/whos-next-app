import { IUserStore, useUserStore } from "../../../context/UserContext"
import { ELoginState } from "../../../context/UserContext/useAccountManagement";
import LoginChoices from "./LoginChoices";
import LoginForm from "./LoginForm";
import './styles.scss'
const LoginSteps = () => {
  const userStore: IUserStore = useUserStore();
  switch(userStore.loginState) {
    case ELoginState.Choose: 
      return <LoginChoices />
    case ELoginState.AccountForm: 
      return <LoginForm />
    case ELoginState.Web3: 
      return (
        <div></div>
      )
    case ELoginState.None: 
      return null;
  }
}

export default LoginSteps