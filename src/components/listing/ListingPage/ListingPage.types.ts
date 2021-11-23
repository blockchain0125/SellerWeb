import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";

export interface IListingPageProps {
  styles?: IStyleFunctionOrObject<IListingPageStyleProps, IListingPageStyles>;
}

export interface IListingPageStyleProps {}

export interface IListingPageStyles {
  locationSelectContainer: IStyle;
}
