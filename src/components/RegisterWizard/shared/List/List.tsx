import { classNamesFunction, styled } from "@fluentui/utilities";
import React from "react";
import { getStyles } from "./List.styles";
import { IListProps, IListStyleProps, IListStyles } from "./List.types";

const getClassNames = classNamesFunction<IListStyleProps, IListStyles>();

const ListBase = ({ styles, children }: IListProps) => {
  const classNames = getClassNames(styles);
  return <ul className={classNames.root}>{children}</ul>;
};

export const List = styled<IListProps, IListStyleProps, IListStyles>(ListBase, getStyles);
