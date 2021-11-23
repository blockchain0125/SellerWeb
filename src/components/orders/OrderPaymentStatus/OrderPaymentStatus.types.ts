import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { OrderPaymentDetails } from "../../../models/OrderPaymentDetails";
import { IOrderContactDetailsStyles } from "../OrderContactDetails";

export interface IOrderPaymentStatusProps {
  styles?: IStyleFunctionOrObject<IOrderPaymentStatusStyleProps, IOrderPaymentStatusStyles>;
  item: OrderPaymentDetails;
}

export interface IOrderPaymentStatusStyleProps {}

export interface IOrderPaymentStatusStyles {
  root?: IStyle;
  successColor?: IStyle;
  subComponentStyles: {
    trackingID: Partial<IOrderContactDetailsStyles>;
  };
}

export enum TitleName {
  "Name",
  "ABN",
  "Tracking ID",
}
