import tw from "twin.macro";
import { IDataGridStyleProps, IDataGridStyles } from "./DataGrid.types";

export function getStyles({}: IDataGridStyleProps): IDataGridStyles {
  return {
    root: [
      tw`grid text-grey80 text-xs`,
      {
        gridTemplateColumns: "repeat(2, max-content 1fr)",
      },
    ],
    label: [tw`flex justify-between`],
    value: tw`font-bold ml-2`,
  };
}
