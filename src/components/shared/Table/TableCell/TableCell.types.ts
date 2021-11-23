import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { ITableColumn } from "../Table.types";

export interface ITableCellProps<D = unknown> {
  styles?: IStyleFunctionOrObject<ITableCellStyleProps, ITableCellStyles>;
  item: D;
  column: ITableColumn<D>;
}

export interface ITableCellStyleProps
  extends Pick<ITableColumn, "minimum" | "className" | "bodyClassName" | "bodyStyles"> {}

export interface ITableCellStyles {
  root?: IStyle;
}
