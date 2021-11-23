import tw from "twin.macro";
import { ITableToolbarStyleProps, ITableToolbarStyles } from "./TableToolbar.types";

export function getStyles({}: ITableToolbarStyleProps): ITableToolbarStyles {
  return {
    root: [
      tw`bg-white flex items-center justify-between pl-12 pr-5`,
      {
        height: "57px",
        borderRadius: "4px 4px 0px 0px",
      },
    ],
  };
}
