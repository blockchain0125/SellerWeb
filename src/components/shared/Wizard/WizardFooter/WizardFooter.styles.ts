import tw from "twin.macro";
import { IWizardFooterStyleProps, IWizardFooterStyles } from "./WizardFooter.types";

export function getStyles({}: IWizardFooterStyleProps): IWizardFooterStyles {
  return {
    root: [tw`h-20 bg-background flex items-center justify-end space-x-3`, { paddingRight: "42px" }],
    subComponentStyles: {
      wizardButton: {
        subComponentStyles: {
          button: {
            root: [tw`m-0`],
          },
        },
      },
    },
  };
}
