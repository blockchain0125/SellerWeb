import tw from "twin.macro";
import { IRegisterWizardPageLayoutStyleProps, IRegisterWizardPageLayoutStyles } from "./RegisterWizardPageLayout.types";

export function getStyles({}: IRegisterWizardPageLayoutStyleProps): IRegisterWizardPageLayoutStyles {
  return {
    root: [tw`w-full h-full bg-white flex flex-col`],
    body: [tw`py-5.5 px-11 flex-auto`],
    footer: [tw`py-5.5 px-11 flex-initial`],
  };
}
