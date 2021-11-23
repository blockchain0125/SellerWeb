import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";

export interface IStoreNameWizardProps {
  styles?: IStyleFunctionOrObject<IStoreNameWizardStyleProps, IStoreNameWizardStyles>;
  storeName: string;
  locations: string;
}

export interface IStoreNameWizardStyleProps {}

export interface IStoreNameWizardStyles {
  root?: IStyle;
}
