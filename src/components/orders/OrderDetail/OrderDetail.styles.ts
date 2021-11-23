import tw from "twin.macro";
import { IOrderDetailStyleProps, IOrderDetailStyles } from "./OrderDetail.types";

// unused placeholder props must starts with _ because of eslint rule, change it when used
export function getStyles(_props: IOrderDetailStyleProps): IOrderDetailStyles {
  return {
    root: [tw`w-full pl-7 pt-3 pr-40 pb-12`],
    containerLeft: [tw`flex-grow rounded-sm shadow-md w-3/5`],
    containerRight: [tw`flex-grow rounded-sm shadow-md w-2/5 flex flex-wrap content-between justify-center`],
  };
}
