import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { ICustomButtonProps } from "../../shared/CustomButton";

export interface IStoreListingProps extends Omit<ICustomButtonProps, "label" | "styles" | "rounded"> {
  styles?: IStyleFunctionOrObject<IStoreListingStyleProps, IStoreListingStyles>;
}

export interface IStoreListingStyleProps {}

export interface IStoreListingStyles {
  root?: IStyle;
}
