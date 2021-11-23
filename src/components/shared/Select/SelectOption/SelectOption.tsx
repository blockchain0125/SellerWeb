import { classNamesFunction, styled } from "@fluentui/utilities";
import React, { useCallback } from "react";
import { getStyles } from "./SelectOption.styles";
import { ISelectOptionProps, ISelectOptionStyleProps, ISelectOptionStyles } from "./SelectOption.types";

const getClassNames = classNamesFunction<ISelectOptionStyleProps, ISelectOptionStyles>();

const SelectOptionBase = ({ styles, option, onSelect }: ISelectOptionProps) => {
  const classNames = getClassNames(styles);
  const onClick = useCallback(() => {
    onSelect(option);
  }, [onSelect, option]);

  return (
    <div className={classNames.root} onClick={onClick}>
      {option.display}
    </div>
  );
};

export const SelectOption = styled<ISelectOptionProps, ISelectOptionStyleProps, ISelectOptionStyles>(
  SelectOptionBase,
  getStyles
);
