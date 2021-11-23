import tw from "twin.macro";
import { IStoreDetailsStyleProps, IStoreDetailsStyles } from "./StoreDetails.types";

export function getStyles(_props: IStoreDetailsStyleProps): IStoreDetailsStyles {
  return {
    root: [tw`bg-background p-3 my-4`],
    subComponentStyles: {
      input: {
        input: [tw`rounded-none h-10`],
      },
      tagEditor: {
        root: [tw`border-grey20`],
      },
      button: {
        root: tw`h-10 w-72 bg-primary text-white px-4`,
        label: tw`mx-auto`,
        content: tw`flex-1 relative`,
        icon: [tw`absolute left-0`],
      },
      checkbox: {
        checkIcon: tw`text-primary`,
      },
    },
  };
}
