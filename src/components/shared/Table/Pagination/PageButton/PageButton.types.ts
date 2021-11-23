import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";

export interface IPageButtonProps {
  styles?: IStyleFunctionOrObject<IPageButtonStyleProps, IPageButtonStyles>;
  pageIndex: number;
  activePageIndex: number;
  onClick?: (pageIndex: number) => void;
}

export interface IPageButtonStyleProps {
  active: boolean;
}

export interface IPageButtonStyles {
  root: IStyle;
  button: IStyle;
  activeIndicator: IStyle;
}
