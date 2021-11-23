import tw from "twin.macro";
import { ISellerDeliverProductStyleProps, ISellerDeliverProductStyles } from "./SellerDeliverProduct.types";

export function getStyles(_props: ISellerDeliverProductStyleProps): ISellerDeliverProductStyles {
  return {
    root: [tw`text-sm`],
  };
}
