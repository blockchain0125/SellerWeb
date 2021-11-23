import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { ProductDetails } from "../../../models/ProductDetails";

export interface IProductDetailRowProps {
  styles?: IStyleFunctionOrObject<IProductDetailRowStyleProps, IProductDetailRowStyles>;
  item: ProductDetails;
  totalColumns: number;
}

export interface IProductDetailRowStyleProps {}

export interface IProductDetailRowStyles {
  root?: IStyle;
  dataContainer: IStyle;
  dataLabel: IStyle;
  dataValue: IStyle;
}
