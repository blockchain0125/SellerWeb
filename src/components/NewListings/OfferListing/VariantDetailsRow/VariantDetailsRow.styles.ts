import tw from "twin.macro";
import { IVariantDetailsRowStyleProps, IVariantDetailsRowStyles } from "./VariantDetailsRow.types";

// unused placeholder props must starts with _ because of eslint rule, change it when used
export function getStyles(_props: IVariantDetailsRowStyleProps): IVariantDetailsRowStyles {
  return {
    subComponentStyles: {
      input: {
        input: [tw`rounded-none text-sm h-10`],
        subComponentStyles: {
          field: {
            label: tw`text-sm text-grey80 block mt-4`,
          },
        },
      },
    },
  };
}
