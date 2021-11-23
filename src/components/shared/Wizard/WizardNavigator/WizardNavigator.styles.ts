import tw from "twin.macro";
import { IWizardNavigatorStyleProps, IWizardNavigatorStyles } from "./WizardNavigator.types";

export function getStyles({ vertical }: IWizardNavigatorStyleProps): IWizardNavigatorStyles {
  return {
    root: [
      tw`w-full flex items-center`,
      !vertical && [
        { boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", paddingLeft: "50px" },
        tw`h-15 pr-4 bg-white justify-between`,
      ],
      vertical && [tw`flex-col bg-background w-120 h-full`, { padding: "86px unset" }],
    ],
    nameContainer: [tw`text-2xl text-grey80 font-semibold`],
    stepsContainer: [!vertical && tw`ml-auto space-x-4`, vertical && tw`flex-col flex space-y-7`],
    customButtonContainer: [tw`ml-auto`],
  };
}
