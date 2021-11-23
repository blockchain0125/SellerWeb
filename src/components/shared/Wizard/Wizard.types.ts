import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { ReactNode } from "react";
import { IWizardFooterProps, IWizardFooterStyles } from "./WizardFooter";
import { IWizardNavigatorProps } from "./WizardNavigator";

export interface WizardStep {
  content: ReactNode;
  /**
   * Step name, used as the key of the stap, and displayed in navigator. Must be unique.
   */
  name: string;
  sideBar?: ReactNode;
}

export enum WizardStepStatus {
  Completed,
  Current,
  Incomplete,
}

export interface IWizardProps
  extends Pick<IWizardNavigatorProps, "wizardName" | "customButton">,
    Pick<IWizardFooterProps, "onFinish"> {
  styles?: IStyleFunctionOrObject<IWizardStyleProps, IWizardStyles>;
  steps: WizardStep[];
  vertical?: boolean;
}

export interface IWizardStyleProps {
  vertical?: boolean;
}

export interface IWizardStyles {
  root?: IStyle;
  sidebarContainer: IStyle;
  subComponentStyles: {
    footer: Partial<IWizardFooterStyles>;
  };
}
