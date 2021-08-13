import { FC } from "react"
import classnames from "classnames"

enum EButtonWithIcon {
  None = ''
}

interface IButtonWithIcon {
  variant?: EButtonWithIcon,
  children: JSX.Element
}

const ButtonWithIcon: FC<IButtonWithIcon> = ({variant, children }) => {
  return (
    <button className={classnames(variant)}>
      { children }
    </button>
  )
}

ButtonWithIcon.defaultProps = {
  variant: EButtonWithIcon.None
}

export default ButtonWithIcon