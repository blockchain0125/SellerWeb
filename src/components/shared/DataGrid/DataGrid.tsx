import { classNamesFunction, styled } from "@fluentui/utilities";
import React, { Fragment } from "react";
import { getStyles } from "./DataGrid.styles";
import { IDataGridProps, IDataGridStyleProps, IDataGridStyles } from "./DataGrid.types";

const getClassNames = classNamesFunction<IDataGridStyleProps, IDataGridStyles>();

const DataGridBase = ({ styles, items }: IDataGridProps) => {
  const classNames = getClassNames(styles);
  return (
    <div className={classNames.root}>
      {items.map((item, i) => (
        <Fragment key={i}>
          <div className={classNames.label}>
            <div>{item.label}</div>
            <div className="ml-1">:</div>
          </div>
          <div className={classNames.value}>{item.value}</div>
        </Fragment>
      ))}
    </div>
  );
};

export const DataGrid = styled<IDataGridProps, IDataGridStyleProps, IDataGridStyles>(DataGridBase, getStyles);
