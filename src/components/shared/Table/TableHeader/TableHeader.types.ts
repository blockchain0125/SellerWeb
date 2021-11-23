import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { ITableColumn } from "../Table.types";

export interface ITableHeaderProps<T = unknown> {
  styles?: IStyleFunctionOrObject<ITableHeaderStyleProps, ITableHeaderStyles>;
  columns: ITableColumn<T>[];
}

export interface ITableHeaderStyleProps {}

export interface ITableHeaderStyles {
  root?: IStyle;
  minimumColumn: IStyle;
}
