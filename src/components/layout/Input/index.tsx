import { FC } from "react";
import classnames from "classnames";
import { IInputProps } from "./interfaces";
import { EHeight } from "./enums";

const Input: FC<IInputProps> = ({ height, type, variant, addClasses, ...rest }) => {
  return (
    <input
      type={type}
      className={classnames(variant, addClasses)}
      style={{ height: height }}
      {...rest}
    />
  );
};

const defaultProps = {
  height: EHeight.default,
  type: "text",
};

Input.defaultProps = defaultProps;

export default Input;
