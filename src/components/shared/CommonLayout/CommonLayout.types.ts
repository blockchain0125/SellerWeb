import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { ReactNode } from "react";

export interface ICommonLayoutProps {
  styles?: IStyleFunctionOrObject<ICommonLayoutStyleProps, ICommonLayoutStyles>;
  pageName: string;
  buttonGroup?: ReactNode;
  filters?: ReactNode;
  content: ReactNode;
}

export interface ICommonLayoutStyleProps {}

export interface ICommonLayoutStyles {
  root?: IStyle;
  content: IStyle;
}
