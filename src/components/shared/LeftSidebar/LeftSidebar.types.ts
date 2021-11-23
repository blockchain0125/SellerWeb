import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";

export interface ILeftSidebarProps {
  styles?: IStyleFunctionOrObject<ILeftSidebarStyleProps, ILeftSidebarStyles>;
}

export interface ILeftSidebarStyleProps {}

export interface ILeftSidebarStyles {
  root?: IStyle;
}
