import { classNamesFunction, styled } from "@fluentui/utilities";
import React from "react";
import { Input } from "../../shared/Input";
import { RadioButton } from "../../shared/RadioButton";
import { RegisterWizardPageLayout } from "../shared/RegisterWizardPageLayout";
import { getStyles } from "./Store.styles";
import { IStoreProps, IStoreStyleProps, IStoreStyles } from "./Store.types";

const getClassNames = classNamesFunction<IStoreStyleProps, IStoreStyles>();

const StoreBase = ({ styles }: IStoreProps) => {
  const classNames = getClassNames(styles);
  return (
    <RegisterWizardPageLayout
      body={
        <>
          <h2 className="text-3xl font-semibold text-grey80 mb-2.5">Store</h2>
          <p className="text-base text-grey80 mb-8">Store name and product information</p>

          <div className={classNames.textInputFieldContainer}>
            <label className={classNames.textInputFieldLabel}>Store name</label>
            <Input rounded={false} type="text" />
          </div>

          <div className={classNames.radioFieldContainer}>
            <label htmlFor="has-univeral-product-codes" className={classNames.radioFieldLabel}>
              Do you have univeral product codes (UPCs) for all your products?
            </label>
            <div className={classNames.radiosRow}>
              <RadioButton
                styles={classNames.subComponentStyles.radioButton}
                label="Yes"
                value="yes"
                checked={true}
                name="has-univeral-product-codes"
              />
              <RadioButton
                styles={classNames.subComponentStyles.radioButton}
                label="No"
                value="no"
                checked={false}
                name="has-univeral-product-codes"
              />
            </div>
          </div>

          <div className={classNames.radioFieldContainer}>
            <label htmlFor="is-manufacturer-or-brand-owner" className={classNames.radioFieldLabel}>
              Are you the manufacturer or brand owner (or agent or representative of the brand) for any of the product
              you want to sell on Amazon
            </label>
            <div className={classNames.radiosRow}>
              <RadioButton
                styles={classNames.subComponentStyles.radioButton}
                label="Yes"
                value="yes"
                checked={true}
                name="is-manufacturer-or-brand-owner"
              />
              <RadioButton
                styles={classNames.subComponentStyles.radioButton}
                label="No"
                value="no"
                checked={false}
                name="is-manufacturer-or-brand-owner"
              />
              <RadioButton
                styles={classNames.subComponentStyles.radioButton}
                label="Some of them"
                value="some"
                checked={false}
                name="is-manufacturer-or-brand-owner"
              />
            </div>
          </div>

          <div>
            <label htmlFor="owns-government-registered-trademark" className={classNames.radioFieldLabel}>
              Do you own government-registered trademark for the branded product you want to sell on Amazon?
            </label>
            <div className={classNames.radiosRow}>
              <RadioButton
                styles={classNames.subComponentStyles.radioButton}
                label="Yes"
                value="yes"
                checked={true}
                name="owns-government-registered-trademark"
              />
              <RadioButton
                styles={classNames.subComponentStyles.radioButton}
                label="No"
                value="no"
                checked={false}
                name="owns-government-registered-trademark"
              />
              <RadioButton
                styles={classNames.subComponentStyles.radioButton}
                label="Some of them"
                value="some"
                checked={false}
                name="owns-government-registered-trademark"
              />
            </div>
          </div>
        </>
      }
    />
  );
};

export const Store = styled<IStoreProps, IStoreStyleProps, IStoreStyles>(StoreBase, getStyles);
