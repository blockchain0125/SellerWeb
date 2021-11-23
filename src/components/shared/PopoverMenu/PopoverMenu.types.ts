import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { ReactNode } from "react";
import { usePopper } from "react-popper";
import { IPopoverMenuItemProps } from "./PopoverMenuItem";

export interface IPopoverMenuProps {
  styles?: IStyleFunctionOrObject<IPopoverMenuStyleProps, IPopoverMenuStyles>;
  referenceNode: ReactNode;
  items: IPopoverMenuItemProps[];
  popperOptions: Parameters<typeof usePopper>[2];
}

export interface IPopoverMenuStyleProps {}

export interface IPopoverMenuStyles {
  root?: IStyle;
  menuContainer: IStyle;
}
