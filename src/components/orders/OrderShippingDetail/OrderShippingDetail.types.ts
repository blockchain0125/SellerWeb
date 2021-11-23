import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { OrderProductShipping } from "../../../models/OrderProductShipping";

// consist of (4) order types:
// (1) OrderShipped **default,
// (2) OrderSummary **with deliveryCost
// (3) OrderCollection **fulfillment center || seller
// (4) OrderDelivery
export enum OrderType {
  OrderShipped,
  OrderSummary,
  OrderCollection,
  OrderDelivery,
}

export interface IOrderShippingDetailProps {
  styles?: IStyleFunctionOrObject<IOrderShippingDetailStyleProps, IOrderShippingDetailStyles>;
  item: OrderProductShipping;
  orderTypeTest: OrderType;
}

export interface IOrderShippingDetailStyleProps {
  orderTypeTest: OrderType;
}

export interface IOrderShippingDetailStyles {
  root?: IStyle;
  grandTotal?: IStyle;
}
