import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { ReactNode } from "react";

export interface IOrderContactDetailsProps {
  styles?: IStyleFunctionOrObject<IOrderContactDetailsStyleProps, IOrderContactDetailsStyles>;
  title: string;
  description: ReactNode;
}

export interface IOrderContactDetailsStyleProps {}

export interface IOrderContactDetailsStyles {
  root?: IStyle;
  rowStyles?: IStyle;
  description?: IStyle;
}
