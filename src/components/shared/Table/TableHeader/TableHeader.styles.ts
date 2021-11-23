import { ITableHeaderStyleProps, ITableHeaderStyles } from "./TableHeader.types";

export function getStyles(_props: ITableHeaderStyleProps): ITableHeaderStyles {
  return {
    minimumColumn: {
      width: "1px",
      whiteSpace: "nowrap",
      paddingLeft: "12px",
      paddingRight: "12px",
    },
  };
}
