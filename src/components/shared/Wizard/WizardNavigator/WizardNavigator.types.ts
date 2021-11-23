import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { ReactNode } from "react";
import { WizardStep } from "../Wizard.types";

export interface IWizardNavigatorProps {
  styles?: IStyleFunctionOrObject<IWizardNavigatorStyleProps, IWizardNavigatorStyles>;
  steps: WizardStep[];
  currentStepIndex: number;
  wizardName?: ReactNode;
  customButton?: ReactNode;
  vertical?: boolean;
  onGotoStep: (index: number) => void;
}

export interface IWizardNavigatorStyleProps {
  vertical?: boolean;
}

export interface IWizardNavigatorStyles {
  root: IStyle;
  nameContainer: IStyle;
  stepsContainer: IStyle;
  customButtonContainer: IStyle;
}
