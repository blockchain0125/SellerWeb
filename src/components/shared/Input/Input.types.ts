import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { LegacyRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { FieldStatus, IFieldProps, IFieldStyles } from "../Field";

// any is used as default value of generic type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface IInputProps<T = any> extends Omit<IFieldProps, "styles"> {
  styles?: IStyleFunctionOrObject<IInputStyleProps, IInputStyles>;
  value?: string;
  placeholder?: string;
  onChange?: (newValue: string, customData?: T) => void;
  onKeyUp?: (event: React.KeyboardEvent, customData?: T) => void;
  onFocus?: (event: React.FocusEvent, customData?: T) => void;
  disabled?: boolean;
  /***
   * Type of the input. Not all types are listed here. Add remaining types if necessary.
   */
  type?: "text" | "password" | "email" | "tel" | "number" | "file";
  inputRef?: LegacyRef<HTMLInputElement>;
  customData?: T;
  register?: UseFormRegisterReturn;
  className?: string;
  rounded?: boolean;
}

export interface IInputStyleProps {
  status: FieldStatus;
  isLabelActive: boolean;
  hasLeftIcon: boolean;
  fieldClassName?: string;
  rounded?: boolean;
}

export interface IInputStyles {
  input: IStyle;
  subComponentStyles: {
    field: Partial<IFieldStyles>;
  };
}
