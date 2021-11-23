import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";

export interface IOrdersProps {
  styles?: IStyleFunctionOrObject<IOrdersStyleProps, IOrdersStyles>;
}

export interface IOrdersStyleProps {}

export interface IOrdersStyles {
  root?: IStyle;
  // content: IStyle;
}

// consist of (3) Order Tabs:
// (1) AllOrders "All Orders",
// (2) OrderSummary "Orders By Listings",
// (3) OrderCollection "Return Accept / Reject"
export enum OrderTabs {
  allOrders,
  ordersByListings,
  acceptReject,
}
