import tw from "twin.macro";
import { IOrderDetailsRowStyleProps, IOrderDetailsRowStyles } from "./OrderDetailsRow.types";

// unused placeholder props must starts with _ because of eslint rule, change it when used
export function getStyles(_props: IOrderDetailsRowStyleProps): IOrderDetailsRowStyles {
  return {
    paymentStatus: [
      tw`text-xs text-grey80 font-semibold text-white bg-whatsapp`,
      {
        padding: "2px 18px",
        borderRadius: "4px",
      },
    ],
    deliveryStatus: [
      tw`text-xs text-grey80 font-semibold text-white bg-grey80`,
      {
        padding: "2px 18px",
        borderRadius: "4px",
      },
    ],
    status: [
      tw`w-8 text-secondary00 font-semibold border-2 border-secondary00`,
      {
        padding: "4px 18px",
        borderRadius: "4px",
      },
    ],
    rowStyles: [
      tw`flex justify-between items-center`,
      {
        width: "100%",
      },
    ],
    storeDetails: [
      tw`text-xs bg-background py-1 px-3 mt-2 text-grey80`,
      {
        width: "100%",
      },
    ],
  };
}
