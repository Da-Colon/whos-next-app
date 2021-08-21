import { useRef } from "react";
import { FC } from "react";
import { ReactNode } from "react";
import { IUserStore, useUserStore } from "../../../context/UserContext";
import { EAccountState } from "../../../context/UserContext/useAccountManagement";
import './styles.scss'
interface IModal {
  isVisible: boolean;
  children: ReactNode 
}

const Modal: FC<IModal> = ({isVisible, children}) => {
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
    <div className="modal-overlay" ref={overlayRef} onClick={closeModal}>
      <div className="modal-container">
        { children }
      </div>
    </div>
  )
}

export default Modal;