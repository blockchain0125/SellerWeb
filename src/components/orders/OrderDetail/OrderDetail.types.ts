import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";

export interface IOrderDetailProps {
  styles?: IStyleFunctionOrObject<IOrderDetailStyleProps, IOrderDetailStyles>;
}

export interface IOrderDetailStyleProps {}

export interface IOrderDetailStyles {
  root?: IStyle;
  containerLeft?: IStyle;
  containerRight?: IStyle;
}

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
