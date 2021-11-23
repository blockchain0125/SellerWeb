import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";

export interface IVerifyAccountProps {
  styles?: IStyleFunctionOrObject<IVerifyAccountStyleProps, IVerifyAccountStyles>;
}

export interface IVerifyAccountStyleProps {}

export interface IVerifyAccountStyles {
  root?: IStyle;
}
