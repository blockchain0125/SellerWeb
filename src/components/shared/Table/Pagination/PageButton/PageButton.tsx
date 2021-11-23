import { classNamesFunction, styled } from "@fluentui/utilities";
import React, { useCallback } from "react";
import { getStyles } from "./PageButton.styles";
import { IPageButtonProps, IPageButtonStyleProps, IPageButtonStyles } from "./PageButton.types";

const getClassNames = classNamesFunction<IPageButtonStyleProps, IPageButtonStyles>();

const PageButtonBase = ({ styles, pageIndex, activePageIndex, onClick }: IPageButtonProps) => {
  const active = pageIndex === activePageIndex;
  const classNames = getClassNames(styles, { active });
  const internalOnClick = useCallback(() => {
    if (onClick) {
      onClick(pageIndex);
    }
  }, [onClick, pageIndex]);

  return (
    <div className={classNames.root}>
      {active && <div className={classNames.activeIndicator} />}
      <button className={classNames.button} onClick={internalOnClick}>
        <span>{pageIndex + 1}</span>
      </button>
    </div>
  );
};

export const PageButton = styled<IPageButtonProps, IPageButtonStyleProps, IPageButtonStyles>(PageButtonBase, getStyles);
