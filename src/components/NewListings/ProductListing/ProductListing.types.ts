import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { ICustomButtonProps } from "../../shared/CustomButton";

export interface IProductListingProps extends Omit<ICustomButtonProps, "label" | "styles" | "rounded"> {
  styles?: IStyleFunctionOrObject<IProductListingStyleProps, IProductListingStyles>;
}

export interface IProductListingStyleProps {}

export interface IProductListingStyles {
  root?: IStyle;
}
