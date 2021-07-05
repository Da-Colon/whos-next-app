import React, { FC } from "react";
import classnames from "classnames";

export interface ITextContainerProps {
  variant?: ETextContainer;
  label?: string;
  addClasses?: string;
}

export enum ETextContainer {
  xlarge = "text-3xl text-white font-bold leading-6 tracking-wider",
  large = "text-lg text-ghost_white font-bold leading-6",
  medium = "text-md text-ghost_white leading-5 tracking-wider"
}

const TextContainer: FC<ITextContainerProps> = ({
  variant,
  label,
  addClasses,
  ...rest
}) => {
  return (
    <div className={classnames(variant, addClasses)} {...rest}>
      {label}
    </div>
  );
};

export default TextContainer;
