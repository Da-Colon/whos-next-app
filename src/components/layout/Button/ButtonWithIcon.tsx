import { ButtonHTMLAttributes, FC, MouseEventHandler } from "react"
import classnames from "classnames"

enum EButtonWithIcon {
  None = ''
}

interface IButtonWithIcon extends ButtonHTMLAttributes<any> {
  variant?: EButtonWithIcon,
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

const ButtonWithIcon: FC<IButtonWithIcon> = ({variant, children, handleClick }) => {
  return (
    <button className={classnames(variant)} onClick={handleClick}>
      { children }
    </button>
  )
}

ButtonWithIcon.defaultProps = {
  variant: EButtonWithIcon.None
}

export default ButtonWithIcon