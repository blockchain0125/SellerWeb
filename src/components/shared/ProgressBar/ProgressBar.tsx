import { classNamesFunction, styled } from "@fluentui/utilities";
import React from "react";
import { getStyles } from "./ProgressBar.styles";
import { IProgressBarProps, IProgressBarStyleProps, IProgressBarStyles } from "./ProgressBar.types";

const getClassNames = classNamesFunction<IProgressBarStyleProps, IProgressBarStyles>();

const ProgressBarBase = ({ styles, percentage }: IProgressBarProps) => {
  const classNames = getClassNames(styles, { percentage });
  return (
    <div className={classNames.container}>
      <div className={classNames.bar} />
    </div>
  );
};

export const ProgressBar = styled<IProgressBarProps, IProgressBarStyleProps, IProgressBarStyles>(
  ProgressBarBase,
  getStyles
);
