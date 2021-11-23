import { classNamesFunction, styled } from "@fluentui/utilities";
import classnames from "classnames";
import React from "react";
import { getStyles } from "./TableHeader.styles";
import { ITableHeaderProps, ITableHeaderStyleProps, ITableHeaderStyles } from "./TableHeader.types";

const getClassNames = classNamesFunction<ITableHeaderStyleProps, ITableHeaderStyles>();

const TableHeaderBase = ({ styles, columns }: ITableHeaderProps) => {
  const classNames = getClassNames(styles);
  return (
    <thead className={classnames("bg-background", classNames.root)}>
      <tr>
        {columns.map((column) => (
          <th
            key={column.key}
            className={classnames(
              "text-grey80 text-center text-xs font-normal",
              column.className,
              column.minimum && classNames.minimumColumn
            )}
          >
            {column.name}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export const TableHeader = styled<ITableHeaderProps, ITableHeaderStyleProps, ITableHeaderStyles>(
  TableHeaderBase,
  getStyles
);
