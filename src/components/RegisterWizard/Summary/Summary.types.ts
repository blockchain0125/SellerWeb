import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";

export interface ISummaryProps {
  styles?: IStyleFunctionOrObject<ISummaryStyleProps, ISummaryStyles>;
}

export interface ISummaryStyleProps {}

export interface ISummaryStyles {
  root?: IStyle;
  headline: IStyle;
  smallerHeadline: IStyle;
  gridHolder: IStyle;
  gridHolderOneLine: IStyle;
  infoBoxContainer: IStyle;
}
