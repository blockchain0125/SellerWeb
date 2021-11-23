import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { ReactNode } from "react";

export interface IDeliveryDetailsWizardPageLayoutProps {
  styles?: IStyleFunctionOrObject<IDeliveryDetailsWizardPageLayoutStyleProps, IDeliveryDetailsWizardPageLayoutStyles>;
  body: ReactNode;
  title: string;
}

export interface IDeliveryDetailsWizardPageLayoutStyleProps {}

export interface IDeliveryDetailsWizardPageLayoutStyles {
  root?: IStyle;
  body: IStyle;
}
