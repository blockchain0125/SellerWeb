import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { ReactNode } from "react";

export interface INewListingPageLayoutProps {
  styles?: IStyleFunctionOrObject<INewListingPageLayoutStyleProps, INewListingPageLayoutStyles>;
  body: ReactNode;
}

export interface INewListingPageLayoutStyleProps {}

export interface INewListingPageLayoutStyles {
  root?: IStyle;
}
