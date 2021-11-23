import { classNamesFunction, styled } from "@fluentui/utilities";
import React from "react";
import { TableCell } from "../TableCell";
import { getStyles } from "./TableRow.styles";
import { ITableRowProps, ITableRowStyleProps, ITableRowStyles } from "./TableRow.types";

const getClassNames = classNamesFunction<ITableRowStyleProps, ITableRowStyles>();

const TableRowBase = ({ styles, item, columns, striped = false }: ITableRowProps) => {
  const classNames = getClassNames(styles, { striped });
  return (
    <tr className={classNames.root}>
      {columns.map((column) => (
        <TableCell item={item} column={column} key={column.key} />
      ))}
    </tr>
  );
};

export const TableRow = styled<ITableRowProps, ITableRowStyleProps, ITableRowStyles>(TableRowBase, getStyles);
