import tw from "twin.macro";
import { ISelectProductStyleProps, ISelectProductStyles } from "./SelectProduct.types";

export function getStyles({}: ISelectProductStyleProps): ISelectProductStyles {
  return {
    label: tw`text-xs text-grey80 block mt-2`,
    subComponentStyles: {
      searchInput: {
        input: [tw`rounded-none h-10`],
      },
      input: {
        input: [tw`rounded-none h-10`],
      },
      textarea: {
        textArea: [tw`rounded-none h-10`],
      },
      select: {
        root: [tw`h-10`],
      },
      button: {
        root: tw`w-40 h-9 bg-white text-grey80 inline-flex items-center justify-between px-2`,
        label: tw`mx-auto`,
        content: tw`flex-1 relative`,
        icon: [tw`absolute left-0`],
      },
      tagEditor: {
        root: [tw`border-grey20`],
      },
    },
  };
}
