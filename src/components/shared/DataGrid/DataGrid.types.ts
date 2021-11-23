import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { ReactNode } from "react";

interface DataGridItem {
  label: string;
  value: ReactNode;
}

export interface IDataGridProps {
  styles?: IStyleFunctionOrObject<IDataGridStyleProps, IDataGridStyles>;
  items: DataGridItem[];
}

export interface IDataGridStyleProps {}

export interface IDataGridStyles {
  root: IStyle;
  label: IStyle;
  value: IStyle;
}
