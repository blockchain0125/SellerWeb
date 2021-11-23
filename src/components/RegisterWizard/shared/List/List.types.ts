import { ReactNode } from "react";
import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";

export interface IListProps {
  styles?: IStyleFunctionOrObject<IListStyleProps, IListStyles>;
  children: ReactNode;
}

export interface IListStyleProps {}

export interface IListStyles {
  root?: IStyle;
}
