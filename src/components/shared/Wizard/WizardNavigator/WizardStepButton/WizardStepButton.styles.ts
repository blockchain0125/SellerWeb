import tw from "twin.macro";
import { WizardStepStatus } from "../../Wizard.types";
import { IWizardStepButtonStyleProps, IWizardStepButtonStyles } from "./WizardStepButton.types";

export function getStyles({ status }: IWizardStepButtonStyleProps): IWizardStepButtonStyles {
  return {
    verticalStepIndex: [
      tw`text-grey80 text-xl font-bold mr-5 h-8 w-8 rounded-1/2 border border-grey80 inline-flex items-center justify-center`,
    ],
    currentVerticalStepIndex: [tw`text-white bg-primary border-primary`],
    verticalStepName: [tw`text-grey80 font-semibold`],
    currentVerticalStepName: [tw`text-primary`],
    subComponentStyles: {
      button: {
        root: [
          tw`h-6 w-30 rounded-xs inline-flex items-center`,
          { paddingLeft: "14px", paddingRight: "14px" },
          status === WizardStepStatus.Completed && [tw`bg-whatsapp`],
          status === WizardStepStatus.Current && [tw`bg-grey80`],
          status === WizardStepStatus.Incomplete && [tw`bg-grey60`],
        ],
        label: tw`text-sm`,
        content: tw`w-full justify-between`,
      },
    },
  };
}
