import React, { FC } from "react";
import classnames from "classnames";
import { NavLink } from "react-router-dom";
import {
  EButtonHeights,
  EButtonHoverVariants,
  EButtonVariants,
  EButtonWidths,
} from "./enums";
import { IButtonWithLinkProps } from "./interfaces";

const ButtonWithLink: FC<IButtonWithLinkProps> = ({
  label,
  type,
  variant,
  hoverVariant,
  height,
  width,
  addClasses,
  to,
  activeClassName,
  action,
}) => {
  return (
    <NavLink to={to} activeClassName={activeClassName}>
      <button
        type={type}
        className={classnames(
          variant,
          hoverVariant,
          addClasses
        )}
        style={{ height: height, width: width }}
        onClick={action}
      >
        {label}
      </button>
    </NavLink>
  );
};

ButtonWithLink.defaultProps = {
  variant: EButtonVariants.menu,
  hoverVariant: EButtonHoverVariants.none,
  height: EButtonHeights.default,
  width: EButtonWidths.default,
  type: "button",
  action: () => null,
};

export default ButtonWithLink;
