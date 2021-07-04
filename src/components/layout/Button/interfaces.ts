import { EButtonHeights, EButtonHoverVariants, EButtonVariants, EButtonWidths, EDisabledVariants } from "./enums";

export interface IButtonProps {
  label: string;
  variant?: EButtonVariants;
  hoverVariant?: EButtonHoverVariants;
  disabledVariant?: string;
  height?: EButtonHeights;
  width?: EButtonWidths;
  type?: "button" | "submit" | "reset";
  isDisabled?: boolean;
  addClasses?: string;
  action?: () => void;
}

export interface IButtonWithLinkProps extends IButtonProps {
  to: string;
  activeClassName?: string;
}
