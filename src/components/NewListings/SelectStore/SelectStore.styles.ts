import tw from "twin.macro";
import { ISelectStoreStyleProps, ISelectStoreStyles } from "./SelectStore.types";

export function getStyles({}: ISelectStoreStyleProps): ISelectStoreStyles {
  return {
    subComponentStyles: {
      searchInput: {
        input: [tw`rounded-none h-10`],
      },
      input: {
        input: [tw`rounded-none h-10`],
      },
      button: {
        root: tw`w-40 h-9 bg-white text-grey80 inline-flex items-center justify-between px-4`,
        label: tw`mx-auto`,
        content: tw`flex-1 relative`,
        icon: [tw`absolute left-0`],
      },
      checkbox: {
        checkIcon: tw`text-primary`,
      },
      shadowOverlayer: {
        root: tw`text-sm`,
      },
    },
  };
}
