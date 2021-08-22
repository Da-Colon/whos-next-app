import { IUserStore, useUserStore } from "../../../context/UserContext";
import { EAccountState } from "../../../context/UserContext/useAccountManagement";
import './styles.scss'

interface IButtonWithChoices {
  text: string;
  secondaryAction: string;
  disabled?: boolean;
  loginAction: () => void;
  primaryAction: () => void;
  onClick?: () => void;
}

interface AccountChoices {
  primaryEmailAction: () => void;
  primaryWeb3Action: () => void;
  secondaryWeb3Action: () => void;
  secondaryEmailAction: () => void;
  primaryPath: "Login" | "Sign up";
  secondaryPath: "Login" | "Sign up";
}

const LoginChoices = ({
  primaryEmailAction,
  primaryWeb3Action,
  secondaryEmailAction,
  secondaryWeb3Action,
  primaryPath,
  secondaryPath,
}: AccountChoices) => {
  const userStore: IUserStore = useUserStore();
  return (
    <div className="choices-container">
      <ButtonWithLogo
        text={`${primaryPath} with Email`}
        secondaryAction={`${secondaryPath} with email`}
        primaryAction={secondaryEmailAction}
        loginAction={primaryEmailAction}
      />
      <ButtonWithLogo
        text={`${primaryPath} with Web3`}
        secondaryAction={`${secondaryPath} with web3`}
        primaryAction={secondaryWeb3Action}
        loginAction={primaryWeb3Action}
        disabled={true}
      />
      <button
        type="button"
        className="choices-close-button"
        onClick={() => userStore.updateLoginState(EAccountState.None)}
      >
        Close
      </button>
    </div>
  );
};

const ButtonWithLogo = ({
  text,
  secondaryAction,
  disabled,
  primaryAction,
  loginAction,
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
      onClick={primaryAction}
      disabled={disabled}
    >
      {secondaryAction}
    </button>
  </div>
);

export default LoginChoices;
