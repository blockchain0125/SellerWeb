import { classNamesFunction, styled } from "@fluentui/utilities";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FunctionComponent, useCallback } from "react";
import { getStyles } from "./Tag.styles";
import { ITagProps, ITagStyleProps, ITagStyles } from "./Tag.types";

const getClassNames = classNamesFunction<ITagStyleProps, ITagStyles>();

const TagBase = ({ styles, label, onRemove, customData }: ITagProps) => {
  const classNames = getClassNames(styles);
  const internalOnRemove = useCallback(() => {
    onRemove(customData);
  }, [customData, onRemove]);

  return (
    <div className={classNames.root}>
      <span className={classNames.label}>{label}</span>
      <FontAwesomeIcon
        icon={faTimesCircle}
        inverse
        className="text-xs ml-4 cursor-pointer"
        onClick={internalOnRemove}
      />
    </div>
  );
};

export const Tag = styled<ITagProps, ITagStyleProps, ITagStyles>(TagBase, getStyles);

export function StrongTypedTag<T>(): FunctionComponent<ITagProps<T>> {
  return Tag as FunctionComponent<ITagProps<T>>;
}
