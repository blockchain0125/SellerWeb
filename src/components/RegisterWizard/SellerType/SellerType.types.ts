import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { ISelectStyles, ISelectStyleProps } from "../../shared/Select";
import { IFieldStyles, IFieldStyleProps } from "../../shared/Field";
import { IInputStyles, IInputStyleProps } from "../../shared/Input";

export interface ISellerTypeProps {
  styles?: IStyleFunctionOrObject<ISellerTypeStyleProps, ISellerTypeStyles>;
}

export interface ISellerTypeStyleProps {}

export interface ISellerTypeStyles {
  root?: IStyle;
  checklistContainer: IStyle;
  fieldContainer: IStyle;
  row2Cols: IStyle;
  row3Cols: IStyle;
  subComponentStyles: {
    select: IStyleFunctionOrObject<ISelectStyleProps, ISelectStyles>;
    field: IStyleFunctionOrObject<IFieldStyleProps, IFieldStyles>;
    input: IStyleFunctionOrObject<IInputStyleProps, IInputStyles>;
  };
}
