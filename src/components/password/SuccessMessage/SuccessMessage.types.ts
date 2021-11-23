import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { PasswordType } from "../passwordType";

export interface ISuccessMessageProps {
  styles?: IStyleFunctionOrObject<ISuccessMessageStyleProps, ISuccessMessageStyles>;
  title: string;
  messageType: PasswordType;
}

export interface ISuccessMessageStyleProps {}

export interface ISuccessMessageStyles {
  root?: IStyle;
}
