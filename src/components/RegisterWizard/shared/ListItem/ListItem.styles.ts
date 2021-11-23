import tw from "twin.macro";
import { IListItemStyleProps, IListItemStyles } from "./ListItem.types";

export function getStyles({}: IListItemStyleProps): IListItemStyles {
  return {
    root: tw`flex items-center mb-4`,
    listItemIcon: [
      tw`mr-3 text-grey10`,
      {
        display: "inline-block",
        width: "12px",
        height: "12px",
      },
    ],
    listItemContent: tw`text-grey80 font-semibold text-sm`,
  };
}
