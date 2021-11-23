import { classNamesFunction, styled } from "@fluentui/utilities";
import React, { Fragment, FunctionComponent, useMemo, useState } from "react";
import { Pagination } from "./Pagination";
import { getStyles } from "./Table.styles";
import { ITableProps, ITableStyleProps, ITableStyles } from "./Table.types";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";

const getClassNames = classNamesFunction<ITableStyleProps, ITableStyles>();

const TableBase = ({
  styles,
  columns,
  items,
  getKey,
  striped,
  onRenderRow,
  itemsPerPage = 10,
  pageButtonNumber = 5,
  id,
}: ITableProps) => {
  const classNames = getClassNames(styles);
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const displayItems = useMemo(
    () => items.slice(currentPageIndex * itemsPerPage, (currentPageIndex + 1) * itemsPerPage),
    [currentPageIndex, items, itemsPerPage]
  );
  return (
    <div className={classNames.root}>
      <table className={classNames.table} id={id}>
        <TableHeader columns={columns} />
        <tbody>
          {displayItems.map((item) =>
            onRenderRow ? (
              <Fragment key={getKey(item)}>{onRenderRow(item)}</Fragment>
            ) : (
              <TableRow
                item={item}
                columns={columns}
                key={getKey(item)}
                striped={striped}
                styles={classNames.subComponentStyles.tableRow}
              />
            )
          )}
        </tbody>
      </table>
      <div className="mt-3">
        <Pagination
          itemsPerPage={itemsPerPage}
          itemsCount={items.length}
          pageButtonNumber={pageButtonNumber}
          onPageChange={setCurrentPageIndex}
        />
      </div>
    </div>
  );
};

export const Table = styled<ITableProps, ITableStyleProps, ITableStyles>(TableBase, getStyles);

export function StrongTypedTable<T>(): FunctionComponent<ITableProps<T>> {
  return Table as FunctionComponent<ITableProps<T>>;
}
