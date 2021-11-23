import { classNamesFunction, styled } from "@fluentui/utilities";
import React from "react";
import { getStyles } from "./CustomButton.styles";
import { ICustomButtonProps, ICustomButtonStyleProps, ICustomButtonStyles } from "./CustomButton.types";
import cn from "classnames";

const getClassNames = classNamesFunction<ICustomButtonStyleProps, ICustomButtonStyles>();

const CustomButtonBase = ({
  styles,
  fullSize = false,
  rounded = false,
  disabled,
  primary = false,
  label,
  icon,
  iconLeft = false,
  onClick,
  textOnly = false,
  noMargin = false,
  customClass,
}: ICustomButtonProps) => {
  const noLabel = !label;
  const classNames = getClassNames(styles, { fullSize, rounded, noLabel, noMargin, iconLeft, primary, textOnly });
  return (
    <button className={cn(classNames.root, customClass)} onClick={onClick} disabled={disabled}>
      <span className={classNames.content}>
        {icon && <span className={classNames.icon}>{icon}</span>} <span className={classNames.label}>{label}</span>
      </span>
    </button>
  );
};

export const CustomButton = styled<ICustomButtonProps, ICustomButtonStyleProps, ICustomButtonStyles>(
  CustomButtonBase,
  getStyles
);

export { CustomButton as default };
