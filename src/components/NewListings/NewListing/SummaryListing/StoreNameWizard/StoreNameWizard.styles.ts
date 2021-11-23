import tw from "twin.macro";
import { IStoreNameWizardStyleProps, IStoreNameWizardStyles } from "./StoreNameWizard.types";

export function getStyles(_props: IStoreNameWizardStyleProps): IStoreNameWizardStyles {
  return {
    root: [tw`bg-white p-3 flex justify-between my-4`],
  };
}
