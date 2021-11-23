import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { ReactNode } from "react";

export interface ISummaryListingPageLayoutProps {
  styles?: IStyleFunctionOrObject<ISummaryListingPageLayoutStyleProps, ISummaryListingPageLayoutStyles>;
  body: ReactNode;
}

export interface ISummaryListingPageLayoutStyleProps {}

export interface ISummaryListingPageLayoutStyles {
  root?: IStyle;
}
