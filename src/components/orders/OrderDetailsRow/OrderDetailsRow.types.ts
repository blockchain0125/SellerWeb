import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { OrderDetails } from "../../../models/OrderDetails";

export interface IOrderDetailsRowProps {
  styles?: IStyleFunctionOrObject<IOrderDetailsRowStyleProps, IOrderDetailsRowStyles>;
  item: OrderDetails;
  totalColumns: number;
}

export interface IOrderDetailsRowStyleProps {}

export interface IOrderDetailsRowStyles {
  root?: IStyle;
  paymentStatus?: IStyle;
  deliveryStatus?: IStyle;
  status?: IStyle;
  rowStyles?: IStyle;
  storeDetails?: IStyle;
}
