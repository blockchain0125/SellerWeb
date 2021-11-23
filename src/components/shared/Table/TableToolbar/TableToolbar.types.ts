import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { ReactNode } from "react";

export interface Tab {
  key: string;
  label: ReactNode;
}

export interface ITableToolbarProps {
  styles?: IStyleFunctionOrObject<ITableToolbarStyleProps, ITableToolbarStyles>;
  tabs: Tab[];
  activeTabKey?: Tab["key"];
  onTabChange?: (key: Tab["key"]) => void;
}

export interface ITableToolbarStyleProps {}

export interface ITableToolbarStyles {
  root: IStyle;
}
