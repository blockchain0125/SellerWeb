import { classNamesFunction, styled } from "@fluentui/utilities";
import React from "react";
import { getStyles } from "./CommonLayout.styles";
import { ICommonLayoutProps, ICommonLayoutStyleProps, ICommonLayoutStyles } from "./CommonLayout.types";

const getClassNames = classNamesFunction<ICommonLayoutStyleProps, ICommonLayoutStyles>();

const CommonLayoutBase = ({ styles, filters, content, pageName, buttonGroup }: ICommonLayoutProps) => {
  const classNames = getClassNames(styles);
  return (
    <div className={classNames.root}>
      <div className={classNames.content}>
        <div className="relative">
          <div className="text-grey80 text-2xl font-semibold pt-3">{pageName}</div>
          <div className="absolute right-0 top-8">{buttonGroup}</div>
        </div>
        {filters && <div className="mt-3">{filters}</div>}
        <div className="mt-3">{content}</div>
      </div>
    </div>
  );
};

export const CommonLayout = styled<ICommonLayoutProps, ICommonLayoutStyleProps, ICommonLayoutStyles>(
  CommonLayoutBase,
  getStyles
);
