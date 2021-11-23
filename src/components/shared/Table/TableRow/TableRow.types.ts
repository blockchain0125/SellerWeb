import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { ITableColumn } from "../Table.types";

export interface ITableRowProps<T = unknown> {
  styles?: IStyleFunctionOrObject<ITableRowStyleProps, ITableRowStyles>;
  item: T;
  columns: ITableColumn<T>[];
  striped?: boolean;
}

export interface ITableRowStyleProps {
  striped: boolean;
}

export interface ITableRowStyles {
  root?: IStyle;
}
