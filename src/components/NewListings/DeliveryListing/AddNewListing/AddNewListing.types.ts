import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { IRadioButtonStyles, IRadioButtonStyleProps } from "../../../shared/RadioButton";
import { IInputStyles, IInputStyleProps } from "../../../shared/Input";
import { IFieldStyles, IFieldStyleProps } from "../../../shared/Field";
import { ISelectStyles, ISelectStyleProps } from "../../../shared/Select";

export interface IAddNewListingProps {
  styles?: IStyleFunctionOrObject<IAddNewListingStyleProps, IAddNewListingStyles>;
}

export interface IAddNewListingStyleProps {}

export interface IAddNewListingStyles {
  root?: IStyle;
  fieldContainer: IStyle;
  row2Cols: IStyle;
  subComponentStyles: {
    radioButton: IStyleFunctionOrObject<IRadioButtonStyleProps, IRadioButtonStyles>;
    input: IStyleFunctionOrObject<IInputStyleProps, IInputStyles>;
    field: IStyleFunctionOrObject<IFieldStyleProps, IFieldStyles>;
    select: IStyleFunctionOrObject<ISelectStyleProps, ISelectStyles>;
  };
}
