import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { ICustomButtonStyles } from "../../shared/CustomButton";
import { IInputStyles, IInputStyleProps } from "../../shared/Input";
import { PasswordType } from "../passwordType";

export interface IEmailVerificationProps {
  styles?: IStyleFunctionOrObject<IEmailVerificationStyleProps, IEmailVerificationStyles>;
  title: string;
  fieldType: PasswordType;
  buttonLabel: string;
  onClickSendCode?: () => void;
}

export interface IEmailVerificationStyleProps {}

export interface IEmailVerificationStyles {
  root?: IStyle;
  subComponentStyles: {
    input: IStyleFunctionOrObject<IInputStyleProps, IInputStyles>;
    customButton: IStyleFunctionOrObject<unknown, ICustomButtonStyles>;
  };
}
