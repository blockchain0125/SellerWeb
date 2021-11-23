import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { ICustomButtonStyles } from "../../../CustomButton";
import { WizardStep, WizardStepStatus } from "../../Wizard.types";
import { IWizardNavigatorProps } from "../WizardNavigator.types";

export interface IWizardStepButtonProps {
  styles?: IStyleFunctionOrObject<IWizardStepButtonStyleProps, IWizardStepButtonStyles>;
  status: WizardStepStatus;
  step: WizardStep;
  vertical?: boolean;
  index: number;
  onClick: IWizardNavigatorProps["onGotoStep"];
}

export interface IWizardStepButtonStyleProps {
  status: WizardStepStatus;
}

export interface IWizardStepButtonStyles {
  verticalStepIndex: IStyle;
  currentVerticalStepIndex: IStyle;
  verticalStepName: IStyle;
  currentVerticalStepName: IStyle;
  subComponentStyles: {
    button: Partial<ICustomButtonStyles>;
  };
}
