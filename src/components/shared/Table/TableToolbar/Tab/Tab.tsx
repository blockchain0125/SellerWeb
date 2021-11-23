import { classNamesFunction, styled } from "@fluentui/utilities";
import React, { useCallback } from "react";
import { getStyles } from "./Tab.styles";
import { ITabProps, ITabStyleProps, ITabStyles } from "./Tab.types";

const getClassNames = classNamesFunction<ITabStyleProps, ITabStyles>();

const TabBase = ({ styles, tab, onClick, active }: ITabProps) => {
  const classNames = getClassNames(styles, { active });
  const { label, key } = tab;
  const internalOnClick = useCallback(() => {
    if (onClick) {
      onClick(key);
    }
  }, [key, onClick]);

  return (
    <div className={classNames.root} onClick={internalOnClick}>
      {label}
    </div>
  );
};

export const Tab = styled<ITabProps, ITabStyleProps, ITabStyles>(TabBase, getStyles);
