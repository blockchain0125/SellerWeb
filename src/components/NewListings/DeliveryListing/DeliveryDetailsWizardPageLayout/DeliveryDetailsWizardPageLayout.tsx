import { classNamesFunction, styled } from "@fluentui/utilities";
import React from "react";
import { getStyles } from "./DeliveryDetailsWizardPageLayout.styles";
import {
  IDeliveryDetailsWizardPageLayoutProps,
  IDeliveryDetailsWizardPageLayoutStyleProps,
  IDeliveryDetailsWizardPageLayoutStyles,
} from "./DeliveryDetailsWizardPageLayout.types";

const getClassNames = classNamesFunction<
  IDeliveryDetailsWizardPageLayoutStyleProps,
  IDeliveryDetailsWizardPageLayoutStyles
>();

const DeliveryDetailsWizardPageLayoutBase = ({ styles, body, title }: IDeliveryDetailsWizardPageLayoutProps) => {
  const classNames = getClassNames(styles);
  return (
    <div className={classNames.root}>
      <div className="w-3/4 m-auto">
        <p className="text-lg text-messenger font-semibold mb-4">{title}</p>
        <div className={classNames.body}>{body}</div>
      </div>
    </div>
  );
};

export const DeliveryDetailsWizardPageLayout = styled<
  IDeliveryDetailsWizardPageLayoutProps,
  IDeliveryDetailsWizardPageLayoutStyleProps,
  IDeliveryDetailsWizardPageLayoutStyles
>(DeliveryDetailsWizardPageLayoutBase, getStyles);
