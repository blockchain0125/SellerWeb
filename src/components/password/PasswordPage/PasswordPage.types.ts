import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";

export interface IPasswordPageProps {
  styles?: IStyleFunctionOrObject<IPasswordPageStyleProps, IPasswordPageStyles>;
}

export interface IPasswordPageStyleProps {}

export interface IPasswordPageStyles {
  root?: IStyle;
}
