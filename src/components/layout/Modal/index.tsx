import { FC, useRef, ReactNode } from "react";
import classNames from "classnames";
import { IUserStore, useUserStore } from "../../../context/UserContext";
import { EAccountState } from "../../../context/UserContext/useAccountManagement";
import './styles.scss'

interface IModalProps {
  isVisible: boolean;
  addClasses?: string | any;
  children: ReactNode 
}

const Modal: FC<IModalProps> = ({isVisible, addClasses, children}) => {
  const userStore: IUserStore = useUserStore();
  const overlayRef = useRef(null);

  const closeModal = (event: {target: ReactNode}) => {
    const target = event.target
    if(target === overlayRef.current) {
      userStore.updateLoginState(EAccountState.None);
      userStore.updateSignupState(EAccountState.None);
    }
  }
  if(!isVisible) return null
  return (
    <div className={classNames("modal-overlay", {[addClasses]: !!addClasses})} ref={overlayRef} onClick={closeModal}>
      <div className="modal-container">
        { children }
      </div>
    </div>
  )
}

export default Modal;