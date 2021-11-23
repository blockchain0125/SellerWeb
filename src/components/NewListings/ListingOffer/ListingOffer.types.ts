import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { ICustomButtonStyles } from "../../shared/CustomButton";
import { IInputStyles } from "../../shared/Input";
import { ISelectStyles } from "../../shared/Select";

export interface IListingOfferProps {
  styles?: IStyleFunctionOrObject<IListingOfferStyleProps, IListingOfferStyles>;
}

export interface IListingOfferStyleProps {}

export interface IListingOfferStyles {
  root?: IStyle;
  label?: IStyle;
  subComponentStyles: {
    input: Partial<IInputStyles>;
    select: Partial<ISelectStyles>;
    button: Partial<ICustomButtonStyles>;
  };
}
