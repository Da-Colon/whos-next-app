import { EHeight, EInputVariants } from "./enums";

export interface IInputProps {
  variant?: EInputVariants;
  type?: string;
  name?: string;
  value?: string | number,
  action?: (() => void) | ((e: any) => void);
  height?: EHeight;
  id?: string;
  placeholder?: string;
  addClasses?: string;
  onChange?: () => void;
}

export interface INumberInputProps extends IInputProps {
  maxLength: number,
}
