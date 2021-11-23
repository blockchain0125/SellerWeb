import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { ReactNode } from "react";

export interface IPopoverMenuItemProps {
  styles?: IStyleFunctionOrObject<IPopoverMenuItemStyleProps, IPopoverMenuItemStyles>;
  itemKey: string;
  label: ReactNode;
  onClick?: () => void;
}

export interface IPopoverMenuItemStyleProps {}

export interface IPopoverMenuItemStyles {
  root?: IStyle;
}
