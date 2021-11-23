import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";

export interface ICheckboxProps {
  styles?: IStyleFunctionOrObject<ICheckboxStyleProps, ICheckboxStyles>;
  label: React.ReactNode;
  onChange?: (newValue: boolean) => void;
  value?: boolean;
}

export interface ICheckboxStyleProps {}

export interface ICheckboxStyles {
  root?: IStyle;
  checkbox: IStyle;
  checkIcon: IStyle;
  label: IStyle;
}
