import tw from "twin.macro";
import { IShipmentRowStyleProps, IShipmentRowStyles } from "./ShipmentRow.types";

// unused placeholder props must starts with _ because of eslint rule, change it when used
export function getStyles(_props: IShipmentRowStyleProps): IShipmentRowStyles {
  return {
    tr: [tw``, {}],
    id: [tw`text-grey80 text-twitter font-semibold`],
    shippedDate: [],
    status: [
      tw`text-white border-none bg-grey60 w-20 font-semibold border-2`,
      {
        borderRadius: "4px",
        fontSize: "12px",
        textAlign: "center",
      },
    ],
    tracking: [tw`text-grey60`, { color: "#409AEF", fontSize: "12px" }],
    shipmentStatus: [tw`font-semibold`],
    shipmentStatusDate: [],
    tax: [tw`w-8`],
    cost: [tw`w-8 font-semibold text-lg`, { color: "#546171" }],
  };
}
