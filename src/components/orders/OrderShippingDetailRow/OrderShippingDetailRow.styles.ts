import tw from "twin.macro";
import { IOrderShippingDetailRowStyleProps, IOrderShippingDetailRowStyles } from "./OrderShippingDetailRow.types";

// unused placeholder props must starts with _ because of eslint rule, change it when used
export function getStyles(_props: IOrderShippingDetailRowStyleProps): IOrderShippingDetailRowStyles {
  return {
    rowStyles: [tw`grid grid-cols-2 py-3 px-9 text-sm`],
  };
}
