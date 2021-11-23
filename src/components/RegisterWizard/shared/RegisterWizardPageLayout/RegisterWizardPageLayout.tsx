import { classNamesFunction, styled } from "@fluentui/utilities";
import React from "react";
import { getStyles } from "./RegisterWizardPageLayout.styles";
import {
  IRegisterWizardPageLayoutProps,
  IRegisterWizardPageLayoutStyleProps,
  IRegisterWizardPageLayoutStyles,
} from "./RegisterWizardPageLayout.types";

const getClassNames = classNamesFunction<IRegisterWizardPageLayoutStyleProps, IRegisterWizardPageLayoutStyles>();

const RegisterWizardPageLayoutBase = ({ styles, body, footer }: IRegisterWizardPageLayoutProps) => {
  const classNames = getClassNames(styles);
  return (
    <div className={classNames.root}>
      <div className={classNames.body}>{body}</div>
      <div className={classNames.footer}>{footer}</div>
    </div>
  );
};

export const RegisterWizardPageLayout = styled<
  IRegisterWizardPageLayoutProps,
  IRegisterWizardPageLayoutStyleProps,
  IRegisterWizardPageLayoutStyles
>(RegisterWizardPageLayoutBase, getStyles);
