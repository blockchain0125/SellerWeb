import tw from "twin.macro";
import { IOrdersRowStyleProps, IOrdersRowStyles } from "./OrdersRow.types";

// unused placeholder props must starts with _ because of eslint rule, change it when used
export function getStyles(_props: IOrdersRowStyleProps): IOrdersRowStyles {
  return {
    total: [
      tw`text-grey80 font-semibold border-2 border-grey80`,
      {
        padding: "4px 18px",
        borderRadius: "4px",
      },
    ],
    returned: [
      tw`w-4 text-primary01 font-semibold border-2 border-primary01`,
      {
        padding: "4px 18px",
        borderRadius: "4px",
      },
    ],
    delivered: [
      tw`w-4 text-whatsapp font-semibold border-2 border-whatsapp`,
      {
        padding: "4px 18px",
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
  };
}
