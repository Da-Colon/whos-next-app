import classnames from "classnames";
import React, { FC } from "react";
import {
  EButtonHeights,
  EButtonHoverVariants,
  EButtonVariants,
  EButtonWidths,
  EDisabledVariants,
} from "./enums";
import { IButtonProps } from "./interfaces";

const Button: FC<IButtonProps> = ({
  label,
  type,
  variant,
  hoverVariant,
  disabledVariant,
  height,
  width,
  addClasses,
  isDisabled = false,
  action,
}) => {
  return (
    <button
      type={type}
      className={classnames(
        variant,
        { [hoverVariant || EButtonHoverVariants.form]: !isDisabled },
        { "background-main": !isDisabled },
        { "bg-gray-300": isDisabled },
        { [disabledVariant || EDisabledVariants.form]: isDisabled },
        addClasses
      )}
      disabled={isDisabled}
      style={{ height: height, width: width }}
      onClick={action}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  variant: EButtonVariants.menu,
  hoverVariant: EButtonHoverVariants.none,
  disabledVariant: EDisabledVariants.none,
  height: EButtonHeights.default,
  width: EButtonWidths.default,
  type: "button",
};

export default Button;
