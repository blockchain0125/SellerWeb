import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { IRadioButtonStyles, IRadioButtonStyleProps } from "../../../shared/RadioButton";
import { IInputStyles, IInputStyleProps } from "../../../shared/Input";
import { ISelectStyles, ISelectStyleProps } from "../../../shared/Select";

export interface ICustomerPickUpProductProps {
  styles?: IStyleFunctionOrObject<ICustomerPickUpProductStyleProps, ICustomerPickUpProductStyles>;
}

export interface ICustomerPickUpProductStyleProps {}

export interface ICustomerPickUpProductStyles {
  root?: IStyle;
  row2Cols: IStyle;
  subComponentStyles: {
    radioButton: IStyleFunctionOrObject<IRadioButtonStyleProps, IRadioButtonStyles>;
    input: IStyleFunctionOrObject<IInputStyleProps, IInputStyles>;
    select: IStyleFunctionOrObject<ISelectStyleProps, ISelectStyles>;
  };
}
