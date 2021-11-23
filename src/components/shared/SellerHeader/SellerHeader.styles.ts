import tw from "twin.macro";
import { ISellerHeaderStyleProps, ISellerHeaderStyles } from "./SellerHeader.types";

// unused placeholder props must starts with _ because of eslint rule, change it when used
export function getStyles(_props: ISellerHeaderStyleProps): ISellerHeaderStyles {
  return {
    root: [
      tw`pr-5 pl-7 bg-white w-full h-16 flex items-center`,
      {
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
      },
    ],
    subComponentStyles: {
      searchInput: () => ({
        input: {
          height: "40px",
        },
      }),
    },
  };
}
