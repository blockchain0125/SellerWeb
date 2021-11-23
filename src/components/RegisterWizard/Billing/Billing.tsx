import { classNamesFunction, styled } from "@fluentui/utilities";
import React from "react";
import { getStyles } from "./Billing.styles";
import { IBillingProps, IBillingStyleProps, IBillingStyles } from "./Billing.types";
import { Input } from "../../shared/Input";
import { RegisterWizardPageLayout } from "../shared/RegisterWizardPageLayout";

const getClassNames = classNamesFunction<IBillingStyleProps, IBillingStyles>();

const BillingBase = ({ styles }: IBillingProps) => {
  const classNames = getClassNames(styles);
  return (
    <RegisterWizardPageLayout
      body={
        <>
          <h2 className="text-3xl font-semibold text-grey80 mb-2.5">Billing</h2>
          <p className="text-base text-grey80 mb-8">
            We use cadit card for account verification. A one time only one US Dollar ($1) account verification charge
            will be applied to your credit card upon completion of account setup
          </p>
          <div className={classNames.textInputFieldContainer}>
            <label className={classNames.textInputFieldLabel}>Account name</label>
            <Input rounded={false} type="text" />
          </div>
          <div className={classNames.textInputFieldContainer}>
            <label className={classNames.textInputFieldLabel}>Account number</label>
            <Input rounded={false} type="number" />
          </div>
          <div className={classNames.textInputFieldContainer}>
            <label className={classNames.textInputFieldLabel}>Bank name</label>
            <Input rounded={false} type="text" />
          </div>
          <div className={classNames.textInputFieldContainer}>
            <label className={classNames.textInputFieldLabel}>Bank address</label>
            <Input rounded={false} type="text" />
          </div>
          <div className={classNames.textInputFieldContainer}>
            <label className={classNames.textInputFieldLabel}>IFSC code</label>
            <Input rounded={false} type="text" />
          </div>
        </>
      }
    />
  );
};

export const Billing = styled<IBillingProps, IBillingStyleProps, IBillingStyles>(BillingBase, getStyles);
