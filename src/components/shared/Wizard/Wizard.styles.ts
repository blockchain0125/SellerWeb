import tw from "twin.macro";
import { IWizardStyleProps, IWizardStyles } from "./Wizard.types";

export function getStyles({ vertical }: IWizardStyleProps): IWizardStyles {
  return {
    root: [tw`h-full w-full flex`, !vertical && tw`flex-col`],
    sidebarContainer: [
      tw`h-full bg-white z-10`,
      {
        boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)",
      },
    ],
    subComponentStyles: {
      footer: {
        root: [vertical && tw`bg-white`],
      },
    },
  };
}
