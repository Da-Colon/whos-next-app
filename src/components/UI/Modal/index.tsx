import { FC } from "react";
import { ReactNode } from "react";
import './styles.scss'
interface IModal {
  isVisible: boolean;
  children: ReactNode 
}

const Modal: FC<IModal> = ({isVisible, children}) => {
  if(!isVisible) return null
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        { children }
      </div>
    </div>
  )
}

export default Modal;