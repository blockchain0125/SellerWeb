import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { IInputStyles } from "../Input";

export interface ISellerHeaderProps {
  styles?: IStyleFunctionOrObject<ISellerHeaderStyleProps, ISellerHeaderStyles>;
}

export interface ISellerHeaderStyleProps {}

export interface ISellerHeaderStyles {
  root?: IStyle;
  subComponentStyles: {
    searchInput?: IStyleFunctionOrObject<unknown, IInputStyles>;
  };
}
