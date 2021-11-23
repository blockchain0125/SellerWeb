import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";

export interface ISummaryListingProps {
  styles?: IStyleFunctionOrObject<ISummaryListingStyleProps, ISummaryListingStyles>;
}

export interface ISummaryListingStyleProps {}

export interface ISummaryListingStyles {
  root?: IStyle;
}
