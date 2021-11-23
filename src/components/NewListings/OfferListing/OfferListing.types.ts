import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { ICustomButtonProps } from "../../shared/CustomButton";

export interface IOfferListingProps extends Omit<ICustomButtonProps, "label" | "styles" | "rounded"> {
  styles?: IStyleFunctionOrObject<IOfferListingStyleProps, IOfferListingStyles>;
}

export interface IOfferListingStyleProps {}

export interface IOfferListingStyles {
  root?: IStyle;
}
