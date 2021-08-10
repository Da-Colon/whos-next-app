import { EHeight, EInputVariants } from "./enums";

export interface IInputProps {
  variant?: EInputVariants;
  type?: string;
  name?: string;
  value?: string | number,
  height?: EHeight;
  id?: string;
  placeholder?: string;
  addClasses?: string;
  maxLength?: number;
  action?: (() => void) | ((e: any) => void);
  onChange?: (() => void) | ((e: any) => void);
}

export interface INumberInputProps extends IInputProps {
  min?: number,
  max?: number,
}
