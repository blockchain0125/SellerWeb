import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { ICustomButtonStyles } from "../../shared/CustomButton";

export interface ILoginProps {
  styles?: IStyleFunctionOrObject<ILoginStyleProps, ILoginStyles>;
  onClickSignup?: () => void;
}

export interface ILoginStyleProps {}

export interface ILoginStyles {
  root: IStyle;
  subComponentStyles: {
    customButton: IStyleFunctionOrObject<unknown, ICustomButtonStyles>;
  };
}
