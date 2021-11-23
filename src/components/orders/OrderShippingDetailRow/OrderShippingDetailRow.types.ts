import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { ReactNode } from "react";

export interface IOrderShippingDetailRowProps {
  styles?: IStyleFunctionOrObject<IOrderShippingDetailRowStyleProps, IOrderShippingDetailRowStyles>;
  title: string;
  description: ReactNode;
}

export interface IOrderShippingDetailRowStyleProps {}

export interface IOrderShippingDetailRowStyles {
  root?: IStyle;
  rowStyles?: IStyle;
}
