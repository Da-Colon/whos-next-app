import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IUserContext, useUserData } from "../../../context/UserContext";
import { ELoginState } from "../../../context/UserContext/useAccountManagement";

interface IButtonWithChoices {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}

const LoginChoices = () => {
  const userStore: IUserContext = useUserData()
  return (
    <div className="choices-container">
      <FontAwesomeIcon className="login-steps-close" icon={faTimes} onClick={() => userStore.updateLoginState(ELoginState.None)}/>
      <ButtonWithLogo text="Login with Email" onClick={() => userStore.updateLoginState(ELoginState.AccountForm)} />
      <ButtonWithLogo text="Login with Web3" disabled={true}/>
    </div>
  );
};

const ButtonWithLogo = ({ text, ...rest }: IButtonWithChoices) => (
  <button {...rest}>
    <div className="button-with-logo">
      <div className="button-with-logo-text">{text}</div>
    </div>
  </button>
);

export default LoginChoices;
