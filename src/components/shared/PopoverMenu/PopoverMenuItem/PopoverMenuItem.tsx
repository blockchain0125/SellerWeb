import { classNamesFunction, styled } from "@fluentui/utilities";
import React from "react";
import { getStyles } from "./PopoverMenuItem.styles";
import { IPopoverMenuItemProps, IPopoverMenuItemStyleProps, IPopoverMenuItemStyles } from "./PopoverMenuItem.types";

const getClassNames = classNamesFunction<IPopoverMenuItemStyleProps, IPopoverMenuItemStyles>();

const PopoverMenuItemBase = ({ styles, label, onClick }: IPopoverMenuItemProps) => {
  const classNames = getClassNames(styles);
  return (
    <div className={classNames.root} onClick={onClick}>
      {label}
    </div>
  );
};

export const PopoverMenuItem = styled<IPopoverMenuItemProps, IPopoverMenuItemStyleProps, IPopoverMenuItemStyles>(
  PopoverMenuItemBase,
  getStyles
);
