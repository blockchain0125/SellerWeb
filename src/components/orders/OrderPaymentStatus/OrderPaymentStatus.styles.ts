import tw from "twin.macro";
import { IOrderPaymentStatusStyleProps, IOrderPaymentStatusStyles } from "./OrderPaymentStatus.types";

// unused placeholder props must starts with _ because of eslint rule, change it when used
export function getStyles(_props: IOrderPaymentStatusStyleProps): IOrderPaymentStatusStyles {
  return {
    root: [tw`w-full`],
    successColor: [
      tw`bg-whatsapp text-white text-center px-3 flex-grow`,
      {
        borderRadius: "4px",
      },
    ],
    subComponentStyles: {
      trackingID: {
        description: [tw`font-semibold`],
      },
    },
  };
}
