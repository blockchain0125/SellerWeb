import tw from "twin.macro";
import { ITableCellStyleProps, ITableCellStyles } from "./TableCell.types";

export function getStyles({ bodyStyles, bodyClassName, className, minimum }: ITableCellStyleProps): ITableCellStyles {
  return {
    root: [
      tw`font-bold text-grey80 text-sm py-8`,
      bodyClassName,
      className,
      minimum && {
        width: "1px",
        whiteSpace: "nowrap",
        paddingLeft: "12px",
        paddingRight: "12px",
      },
      bodyStyles,
    ],
  };
}
