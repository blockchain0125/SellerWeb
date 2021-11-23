import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { ICustomButtonStyles } from "../../shared/CustomButton";

export interface ISignupProps {
  styles?: IStyleFunctionOrObject<ISignupStyleProps, ISignupStyles>;
  onClickLogin?: () => void;
}

export interface ISignupStyleProps {}

export interface ISignupStyles {
  root: IStyle;
  subComponentStyles: {
    customButton: IStyleFunctionOrObject<unknown, ICustomButtonStyles>;
  };
}
