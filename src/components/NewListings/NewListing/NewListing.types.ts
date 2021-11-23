import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { ICustomButtonProps, ICustomButtonStyles } from "../../shared/CustomButton";

export interface INewListingProps extends Omit<ICustomButtonProps, "label" | "styles" | "rounded"> {
  styles?: IStyleFunctionOrObject<INewListingStyleProps, INewListingStyles>;
}

export interface INewListingStyleProps {}

export interface INewListingStyles {
  root?: IStyle;
  subComponentStyles: {
    button: Partial<ICustomButtonStyles>;
  };
}
