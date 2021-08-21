import { IUserStore, useUserStore } from "../../../context/UserContext";
import { ELoginState } from "../../../context/UserContext/useAccountManagement";

interface IButtonWithChoices {
  text: string;
  signupText: string;
  disabled?: boolean;
  loginAction: () => void;
  signinAction: () => void;
  onClick?: () => void;
}

const LoginChoices = () => {
  const userStore: IUserStore = useUserStore();
  return (
    <div className="choices-container">
      <ButtonWithLogo
        text="Login with Email"
        signupText="Sign up with email"
        signinAction={() => null}
        loginAction={() => userStore.updateLoginState(ELoginState.AccountForm)}
      />
      <ButtonWithLogo
        text="Login with Web3"
        signupText="Sign up with web3"
        signinAction={() => null}
        loginAction={() => null}
        disabled={true}
      />
      <button
        type="button"
        className="login-choices-close-button"
        onClick={() => userStore.updateLoginState(ELoginState.None)}
      >
        Close
      </button>
    </div>
  );
};

const ButtonWithLogo = ({
  text,
  signupText,
  disabled,
  signinAction,
  loginAction,
  ...rest
}: IButtonWithChoices) => (
  <div className="button-with-logo-container">
    <button
      className="button-with-logo-primary"
      disabled={disabled}
      onClick={loginAction}
    >
      <div className="button-with-logo">
        <div className="button-with-logo-text">{text}</div>
      </div>
    </button>
    <button
      className="button-with-logo-secondary"
      onClick={signinAction}
      disabled={disabled}
    >
      {signupText}
    </button>
  </div>
);

export default LoginChoices;
