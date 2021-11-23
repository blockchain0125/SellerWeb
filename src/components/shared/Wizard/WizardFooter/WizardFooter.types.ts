import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { IWizardButtonStyles } from "../../WizardButton";

export interface IWizardFooterProps {
  styles?: IStyleFunctionOrObject<IWizardFooterStyleProps, IWizardFooterStyles>;
  hasNextStep: boolean;
  onNext: () => void;
  hasPrevStep: boolean;
  onPrev: () => void;
  onFinish: () => void;
}

export interface IWizardFooterStyleProps {}

export interface IWizardFooterStyles {
  root?: IStyle;
  subComponentStyles: {
    wizardButton: Partial<IWizardButtonStyles>;
  };
}
