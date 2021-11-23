import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { ReactNode } from "react";

export interface IRadioButtonProps {
  styles?: IStyleFunctionOrObject<IRadioButtonStyleProps, IRadioButtonStyles>;
  checked: boolean;
  label?: ReactNode;
  name: string;
  value: string;
  id?: string;
  onChange?: (value: IRadioButtonProps["value"]) => void;
}

export interface IRadioButtonStyleProps {
  checked: boolean;
}

export interface IRadioButtonStyles {
  root?: IStyle;
  input: IStyle;
  label: IStyle;
  marker: IStyle;
}
