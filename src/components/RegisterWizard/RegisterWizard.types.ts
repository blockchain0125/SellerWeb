import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";

export interface IRegisterWizardProps {
  styles?: IStyleFunctionOrObject<IRegisterWizardStyleProps, IRegisterWizardStyles>;
}

export interface IRegisterWizardStyleProps {}

export interface IRegisterWizardStyles {
  root?: IStyle;
}
