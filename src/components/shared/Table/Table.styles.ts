import tw from "twin.macro";
import { ITableStyleProps, ITableStyles } from "./Table.types";

// unused placeholder props must starts with _ because of eslint rule, change it when used
export function getStyles(_props: ITableStyleProps): ITableStyles {
  return {
    table: tw`w-full`,
    subComponentStyles: {
      tableRow: {},
    },
  };
}
