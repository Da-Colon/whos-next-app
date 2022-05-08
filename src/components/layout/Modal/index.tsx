import { FC, useRef, ReactNode } from "react";
import classNames from "classnames";
import { useUserStore } from "../../../context/UserContext";
import "./styles.scss";
import { UsersStore } from "../../../context/typescript/users.types";
import { AccountState } from "../../../context/typescript/users.enums";

interface ModalProps {
  isVisible: boolean;
  addClasses?: string | any;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isVisible, addClasses, children }) => {
  const userStore: UsersStore = useUserStore();
  const overlayRef = useRef(null);

  const closeModal = (event: { target: ReactNode }) => {
    const target = event.target;
    if (target === overlayRef.current) {
      userStore.updateLoginState(AccountState.None);
      userStore.updateSignupState(AccountState.None);
    }
  };
  if (!isVisible) return null;
  return (
    <div
      className={classNames("modal-overlay", { [addClasses]: !!addClasses })}
      ref={overlayRef}
      onClick={closeModal}
    >
      <div className="modal-container">{children}</div>
    </div>
  );
};

export default Modal;
