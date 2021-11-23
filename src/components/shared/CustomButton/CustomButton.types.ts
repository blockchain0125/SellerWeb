import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import React from "react";

export interface ICustomButtonProps {
  styles?: IStyleFunctionOrObject<ICustomButtonStyleProps, ICustomButtonStyles>;
  fullSize?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  primary?: boolean;
  label?: React.ReactNode;
  icon?: React.ReactElement;
  iconLeft?: boolean;
  onClick?: () => void;
  textOnly?: boolean;
  noMargin?: boolean;
  customClass?: string;
}

export interface ICustomButtonStyleProps {
  noLabel: boolean;
  iconLeft: boolean;
  fullSize: boolean;
  rounded: boolean;
  primary: boolean;
  textOnly: boolean;
  noMargin: boolean;
}

export interface ICustomButtonStyles {
  root: IStyle;
  content: IStyle;
  icon: IStyle;
  label?: IStyle;
}
