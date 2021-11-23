import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { IInputStyles } from "../../shared/Input";
import { IRadioButtonStyles } from "../../shared/RadioButton";
import { ISelectStyles } from "../../shared/Select";

export interface IDeliveryListingProps {
  styles?: IStyleFunctionOrObject<IDeliveryListingStyleProps, IDeliveryListingStyles>;
}

export interface IDeliveryListingStyleProps {}

export interface IDeliveryListingStyles {
  root?: IStyle;
  subComponentStyles: {
    radioButton: Partial<IRadioButtonStyles>;
    input: Partial<IInputStyles>;
    select: Partial<ISelectStyles>;
  };
}
