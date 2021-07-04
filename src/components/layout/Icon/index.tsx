import React, { FC } from "react";
import classnames from "classnames";

export enum EIconVariants {
  default = "w-8 mr-2 h-auto cursor-pointer",
  small = "",
}

interface IIconProps {
  icon: string;
  variant?: EIconVariants;
  addHoverStyle?: boolean;
  onClickAction?: () => void;
}
const HOVER =
  "transform hover:-translate-x-2 hover:-translate-y-1 hover:shadow-hover";

const Icon: FC<IIconProps> = ({
  icon,
  variant,
  addHoverStyle,
  onClickAction,
}) => {
  return (
    <div
      className={classnames(variant, { [HOVER]: addHoverStyle })}
      onClick={onClickAction}
    >
      <img src={icon} alt="" className="w-full h-full" />
    </div>
  );
};

Icon.defaultProps = {
  onClickAction: () => null,
};

export default Icon;
