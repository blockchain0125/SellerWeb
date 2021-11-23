import tw from "twin.macro";
import { IWizardButtonStyleProps, IWizardButtonStyles, WizardButtonType } from "./WizardButton.types";

export function getStyles({ buttonType }: IWizardButtonStyleProps): IWizardButtonStyles {
  return {
    subComponentStyles: {
      button: {
        root: tw`w-40 h-9 bg-white border border-solid border-grey80 text-grey80 inline-flex items-center justify-between px-4`,
        label: tw`mx-auto`,
        content: tw`flex-1 relative`,
        icon: [
          tw`absolute`,
          buttonType === WizardButtonType.Back && { left: "0" },
          buttonType === WizardButtonType.Next && { right: "0" },
        ],
      },
    },
  };
}
