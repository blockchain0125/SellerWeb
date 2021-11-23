import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";

export interface IFieldProps {
  styles?: IStyleFunctionOrObject<IFieldStyleProps, IFieldStyles>;
  status?: FieldStatus;
  message?: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  children?: React.ReactNode;
  label?: string;
  isLabelActive?: boolean;
  /**
   * true: the label is used as placeholder, a label when there is value or is focused, for example: https://material-ui.com/components/text-fields/
   * false: traditional fixed label, for example: https://getbootstrap.com/docs/4.0/components/forms/
   * @default true
   */
  materialStyleLabel?: boolean;
}

export interface IFieldStyleProps {
  status?: FieldStatus;
  isLabelActive: boolean;
  materialStyleLabel: boolean;
}

export interface IFieldStyles {
  root: IStyle;
  label: IStyle;
  message: IStyle;
}

export enum FieldStatus {
  Default,
  Success,
  Error,
}
