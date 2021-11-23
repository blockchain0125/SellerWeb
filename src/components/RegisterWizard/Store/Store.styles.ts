import tw from "twin.macro";
import { IStoreStyleProps, IStoreStyles } from "./Store.types";

export function getStyles({}: IStoreStyleProps): IStoreStyles {
  return {
    textInputFieldContainer: [tw`mb-13`],
    textInputFieldLabel: [tw`text-sm text-grey60 block mb-3.5 `],
    radioFieldContainer: [tw`mb-8`],
    radioFieldLabel: [tw`block text-base text-grey80 mb-3.5`],
    radiosRow: [tw`flex flex-row`],
    subComponentStyles: {
      radioButton: {
        root: [tw`w-auto mr-5.5`],
      },
    },
  };
}
