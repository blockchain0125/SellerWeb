import { ReactNode } from "react";
import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";

export interface IListItemProps {
  styles?: IStyleFunctionOrObject<IListItemStyleProps, IListItemStyles>;
  children: ReactNode;
}

export interface IListItemStyleProps {}

export interface IListItemStyles {
  root: IStyle;
  listItemIcon: IStyle;
  listItemContent: IStyle;
}
