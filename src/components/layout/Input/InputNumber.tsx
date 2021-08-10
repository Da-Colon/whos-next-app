import { FC } from "react";
import classnames from "classnames";
import { INumberInputProps } from "./interfaces";
import { EHeight } from "./enums";

const InputNumber: FC<INumberInputProps> = ({
  height,
  variant,
  type,
  addClasses,
  ...rest
}) => {
  return (
    <input
      type={type}
      pattern="\d*"
      className={classnames(variant, addClasses)}
      style={{ height: height }}
      {...rest}
    />
  );
};

const DEFAULT_PROPS = {
  height: EHeight.default,
  type: "number",
};

InputNumber.defaultProps = DEFAULT_PROPS;

export default InputNumber;
