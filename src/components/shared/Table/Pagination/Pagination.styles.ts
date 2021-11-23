import tw from "twin.macro";
import { IPaginationStyleProps, IPaginationStyles } from "./Pagination.types";

// unused placeholder props must starts with _ because of eslint rule, change it when used
export function getStyles(_props: IPaginationStyleProps): IPaginationStyles {
  return {
    subComponentStyles: {
      navigateButton: {
        root: [
          tw`text-grey80`,
          {
            background: "linear-gradient(0deg, rgba(187, 192, 198, 0.1), rgba(187, 192, 198, 0.1)), #FFFFFF",
            mixBlendMode: "normal",
            width: "82px",
            height: "36px",
            borderRadius: "6px",
          },
        ],
        label: tw`text-xs font-bold`,
      },
    },
  };
}
