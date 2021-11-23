import tw from "twin.macro";
import {
  IDeliveryDetailsWizardPageLayoutStyleProps,
  IDeliveryDetailsWizardPageLayoutStyles,
} from "./DeliveryDetailsWizardPageLayout.types";

export function getStyles(_props: IDeliveryDetailsWizardPageLayoutStyleProps): IDeliveryDetailsWizardPageLayoutStyles {
  return {
    body: [tw`text-sm`],
  };
}
