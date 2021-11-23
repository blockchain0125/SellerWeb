import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { Tab } from "../TableToolbar.types";

export interface ITabProps {
  styles?: IStyleFunctionOrObject<ITabStyleProps, ITabStyles>;
  tab: Tab;
  onClick?: (tabKey: Tab["key"]) => void;
  active?: boolean;
}

export interface ITabStyleProps {
  active?: boolean;
}

export interface ITabStyles {
  root?: IStyle;
}
