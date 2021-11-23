import tw from "twin.macro";
import { IProductStatusStyleProps, IProductStatusStyles } from "./ProductStatus.types";

// unused placeholder props must starts with _ because of eslint rule, change it when used
export function getStyles(_props: IProductStatusStyleProps): IProductStatusStyles {
  return {
    root: {
      width: "473px",
    },
    subComponentStyles: {
      progressBar: {
        container: [tw`p-0`, { height: "2px" }],
        bar: [tw`bg-whatsapp`],
      },
    },
  };
}
