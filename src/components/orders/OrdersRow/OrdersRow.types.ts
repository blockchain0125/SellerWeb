import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { OrderDetails } from "../../../models/OrderDetails";
import { OrderTabs } from "../OrdersPage";

export interface IOrdersRowProps {
  styles?: IStyleFunctionOrObject<IOrdersRowStyleProps, IOrdersRowStyles>;
  item: OrderDetails;
  totalColumns: number;
  orderTab: OrderTabs;
}

export interface IOrdersRowStyleProps {}

export interface IOrdersRowStyles {
  total?: IStyle;
  returned?: IStyle;
  delivered?: IStyle;
  status?: IStyle;
}
