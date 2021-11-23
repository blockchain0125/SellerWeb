import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";

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

export interface IOrderContactButtonProps {
  styles?: IStyleFunctionOrObject<IOrderContactButtonStyleProps, IOrderContactButtonStyles>;
  orderTypeTest: OrderType;
}

export interface IOrderContactButtonStyleProps {
  orderType: OrderType;
}

export interface IOrderContactButtonStyles {
  root?: IStyle;
  buttonDiscussionDesign?: IStyle;
  buttonPrintDesign?: IStyle;
}
