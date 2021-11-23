import tw from "twin.macro";
import { IShipmentStyleProps, IShipmentStyles } from "./ShipmentPage.type";

// unused placeholder props must starts with _ because of eslint rule, change it when used
export function getStyles(_props: IShipmentStyleProps): IShipmentStyles {
  return {
    root: [tw`w-full pl-7 pt-3 pr-28 pb-12`],
  };
}
