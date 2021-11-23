import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { ICustomButtonProps, ICustomButtonStyles } from "../CustomButton";

export enum WizardButtonType {
  Next,
  Back,
  Finish,
}

export interface IWizardButtonProps extends Omit<ICustomButtonProps, "label" | "styles" | "rounded"> {
  styles?: IStyleFunctionOrObject<IWizardButtonStyleProps, IWizardButtonStyles>;
  buttonType: WizardButtonType;
}

export interface IWizardButtonStyleProps {
  buttonType: WizardButtonType;
}

export interface IWizardButtonStyles {
  subComponentStyles: {
    button: Partial<ICustomButtonStyles>;
  };
}
