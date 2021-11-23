import { classNamesFunction, styled } from "@fluentui/utilities";
import React from "react";
import { getStyles } from "./TableCell.styles";
import { ITableCellProps, ITableCellStyleProps, ITableCellStyles } from "./TableCell.types";

const getClassNames = classNamesFunction<ITableCellStyleProps, ITableCellStyles>();

const TableCellBase = ({ styles, item, column }: ITableCellProps) => {
  const { root } = getClassNames(styles, column);
  const { onRender, fieldName } = column;
  return (
    <td className={root}>
      {/* @ts-ignore: Generic component, type is ensured by outside */}
      {onRender ? onRender(item) : item[fieldName]}
    </td>
  );
};

export const TableCell = styled<ITableCellProps, ITableCellStyleProps, ITableCellStyles>(TableCellBase, getStyles);
