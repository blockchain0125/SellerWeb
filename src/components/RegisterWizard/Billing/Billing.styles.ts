import tw from "twin.macro";
import { IBillingStyleProps, IBillingStyles } from "./Billing.types";

export function getStyles({}: IBillingStyleProps): IBillingStyles {
  return {
    textInputFieldLabel: [tw`block text-sm text-grey80 mb-3.5`],
    textInputFieldContainer: [tw`mb-3.5`],
  };
}
