import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { ICustomButtonStyles } from "../../shared/CustomButton";
import { IInputStyles, IInputStyleProps } from "../../shared/Input";

export interface ICreateNewPasswordProps {
  styles?: IStyleFunctionOrObject<ICreateNewPasswordStyleProps, ICreateNewPasswordStyles>;
}

export interface ICreateNewPasswordStyleProps {}

export interface ICreateNewPasswordStyles {
  root?: IStyle;
  fieldContainer: IStyle;
  subComponentStyles: {
    input: IStyleFunctionOrObject<IInputStyleProps, IInputStyles>;
    customButton: IStyleFunctionOrObject<unknown, ICustomButtonStyles>;
  };
}
