import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";

export interface ILoginSignupProps {
  styles?: IStyleFunctionOrObject<ILoginSignupStyleProps, ILoginSignupStyles>;
}

export interface ILoginSignupStyleProps {}

export interface ILoginSignupStyles {
  root?: IStyle;
}
