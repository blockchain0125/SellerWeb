import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { NavigationLink } from "../navigation";

export interface ILeftSidebarLinkProps {
  styles?: IStyleFunctionOrObject<ILeftSidebarLinkStyleProps, ILeftSidebarLinkStyles>;
  navItem: NavigationLink;
}

export interface ILeftSidebarLinkStyleProps {}

export interface ILeftSidebarLinkStyles {
  root?: IStyle;
  link?: IStyle;
  active: IStyle;
}
