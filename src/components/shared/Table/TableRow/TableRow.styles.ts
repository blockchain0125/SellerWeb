import tw from "twin.macro";
import { ITableRowStyleProps, ITableRowStyles } from "./TableRow.types";

export function getStyles({ striped }: ITableRowStyleProps): ITableRowStyles {
  return {
    root: [
      striped && {
        ":nth-of-type(2n)": tw`bg-background`,
      },
    ],
  };
}
