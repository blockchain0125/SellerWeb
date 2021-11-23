import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";

export interface ISellerDeliverProductProps {
  styles?: IStyleFunctionOrObject<ISellerDeliverProductStyleProps, ISellerDeliverProductStyles>;
}

export interface ISellerDeliverProductStyleProps {}

export interface ISellerDeliverProductStyles {
  root?: IStyle;
}
