import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";

export interface IBillingProps {
  styles?: IStyleFunctionOrObject<IBillingStyleProps, IBillingStyles>;
}

export interface IBillingStyleProps {}

export interface IBillingStyles {
  root?: IStyle;
  textInputFieldContainer: IStyle;
  textInputFieldLabel: IStyle;
}
