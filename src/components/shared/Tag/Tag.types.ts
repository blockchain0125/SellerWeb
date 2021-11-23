import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { ReactNode } from "react";

export interface ITagProps<D = unknown> {
  styles?: IStyleFunctionOrObject<ITagStyleProps, ITagStyles>;
  label: ReactNode;
  // data that will be passed to onRemove callback
  customData?: D;
  onRemove: (data: D) => void;
}

export interface ITagStyleProps {}

export interface ITagStyles {
  root: IStyle;
  label: IStyle;
}
