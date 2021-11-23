import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { ReactNode } from "react";

export interface IRegisterWizardPageLayoutProps {
  styles?: IStyleFunctionOrObject<IRegisterWizardPageLayoutStyleProps, IRegisterWizardPageLayoutStyles>;
  body: ReactNode;
  footer?: ReactNode;
}

export interface IRegisterWizardPageLayoutStyleProps {}

export interface IRegisterWizardPageLayoutStyles {
  root: IStyle;
  body: IStyle;
  footer: IStyle;
}
