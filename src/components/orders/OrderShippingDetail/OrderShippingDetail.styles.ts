import tw from "twin.macro";
import { IOrderShippingDetailStyleProps, IOrderShippingDetailStyles } from "./OrderShippingDetail.types";

// unused placeholder props must starts with _ because of eslint rule, change it when used
export function getStyles(_props: IOrderShippingDetailStyleProps): IOrderShippingDetailStyles {
  return {
    root: [tw`w-full`],
    grandTotal: [tw`grid grid-cols-1 bg-grey80 text-sm text-white`],
  };
}
