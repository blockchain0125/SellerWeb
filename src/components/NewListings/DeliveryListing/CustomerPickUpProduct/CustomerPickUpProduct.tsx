import { classNamesFunction, styled } from "@fluentui/utilities";
import { DeliveryDetailsWizardPageLayout } from "../DeliveryDetailsWizardPageLayout";
import cn from "classnames";
import { ReactNode } from "react";
import { RadioButton } from "../../../shared/RadioButton";
import { Input } from "../../../shared/Input";
import { Select, ISelectOption } from "../../../shared/Select";
import { getStyles } from "./CustomerPickUpProduct.styles";
import {
  ICustomerPickUpProductProps,
  ICustomerPickUpProductStyleProps,
  ICustomerPickUpProductStyles,
} from "./CustomerPickUpProduct.types";

const getClassNames = classNamesFunction<ICustomerPickUpProductStyleProps, ICustomerPickUpProductStyles>();

const makeISelectOption = (value: string, display: ReactNode): ISelectOption => {
  return {
    value,
    display,
  };
};

export const countryOptions: ISelectOption[] = [makeISelectOption("us", "United States")];
export const provinceOptions: ISelectOption[] = [makeISelectOption("st", "Street Address")];

const onChange = (): void => {
  return;
};

const CustomerPickUpProductBase = ({ styles }: ICustomerPickUpProductProps) => {
  const classNames = getClassNames(styles);
  return (
    <div className={classNames.root}>
      <DeliveryDetailsWizardPageLayout
        title="Seller Location Address"
        body={
          <>
            <RadioButton
              styles={classNames.subComponentStyles.radioButton}
              label="Same As Business Same Address"
              value="yes"
              checked={true}
              name="has-univeral-product-codes"
            />

            <Input
              styles={classNames.subComponentStyles.input}
              label="Address Line 1"
              materialStyleLabel={false}
              rounded={false}
              type="text"
              placeholder="Street Address"
            />
            <Input
              styles={classNames.subComponentStyles.input}
              label="Address Line 2"
              materialStyleLabel={false}
              rounded={false}
              type="text"
              placeholder="Street Address"
            />

            <div className={cn(classNames.row2Cols)}>
              <Input
                styles={classNames.subComponentStyles.input}
                label="Town/City"
                materialStyleLabel={false}
                rounded={false}
                type="text"
              />
              <div>
                <label className="text-grey60">Country/Region</label>
                <Select
                  options={countryOptions}
                  selectedOption={countryOptions[0]}
                  onSelectedOptionChange={onChange}
                  styles={classNames.subComponentStyles.select}
                />
              </div>
            </div>

            <div className={cn(classNames.row2Cols)}>
              <div>
                <label className="text-grey60">State/Province/Region</label>
                <Select
                  options={provinceOptions}
                  selectedOption={provinceOptions[0]}
                  onSelectedOptionChange={onChange}
                  styles={classNames.subComponentStyles.select}
                />
              </div>
              <Input
                styles={classNames.subComponentStyles.input}
                label="Zip/Postal Code"
                materialStyleLabel={false}
                rounded={false}
                type="text"
              />
            </div>
          </>
        }
      />
    </div>
  );
};

export const CustomerPickUpProduct = styled<
  ICustomerPickUpProductProps,
  ICustomerPickUpProductStyleProps,
  ICustomerPickUpProductStyles
>(CustomerPickUpProductBase, getStyles);
