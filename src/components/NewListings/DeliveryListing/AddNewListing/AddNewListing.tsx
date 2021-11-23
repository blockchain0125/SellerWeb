import { classNamesFunction, styled } from "@fluentui/utilities";
import { ReactNode } from "react";
import { Input } from "../../../shared/Input";
import { Select, ISelectOption } from "../../../shared/Select";
import { Field } from "../../../shared/Field";
import { DeliveryDetailsWizardPageLayout } from "../DeliveryDetailsWizardPageLayout";
import { getStyles } from "./AddNewListing.styles";
import { IAddNewListingProps, IAddNewListingStyleProps, IAddNewListingStyles } from "./AddNewListing.types";

const getClassNames = classNamesFunction<IAddNewListingStyleProps, IAddNewListingStyles>();

const makeISelectOption = (value: string, display: ReactNode): ISelectOption => {
  return {
    value,
    display,
  };
};

export const courierTypeOptions: ISelectOption[] = [makeISelectOption("ups", "UPS")];
export const shippingTypeOptions: ISelectOption[] = [makeISelectOption("airmail", "Airmail")];

const onChange = (): void => {
  return;
};

const AddNewListingBase = ({ styles }: IAddNewListingProps) => {
  const classNames = getClassNames(styles);
  return (
    <div className={classNames.root}>
      <DeliveryDetailsWizardPageLayout
        title="Courier Details"
        body={
          <>
            <div className="grid grid-cols-2 gap-5">
              <Field label="Courier Company" materialStyleLabel={false} styles={classNames.subComponentStyles.field}>
                <Select
                  options={courierTypeOptions}
                  selectedOption={courierTypeOptions[0]}
                  onSelectedOptionChange={onChange}
                  styles={classNames.subComponentStyles.select}
                />
              </Field>

              <Field label="Shipping Method" materialStyleLabel={false} styles={classNames.subComponentStyles.field}>
                <Select
                  options={shippingTypeOptions}
                  selectedOption={shippingTypeOptions[0]}
                  onSelectedOptionChange={onChange}
                  styles={classNames.subComponentStyles.select}
                />
              </Field>
            </div>

            <div className="mb-6 grid grid-cols-2 gap-5 items-end">
              <Input
                styles={classNames.subComponentStyles.input}
                label="Delivery Fee"
                materialStyleLabel={false}
                rounded={false}
                type="text"
              />
              <Input
                styles={classNames.subComponentStyles.input}
                label="Tax"
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

export const AddNewListing = styled<IAddNewListingProps, IAddNewListingStyleProps, IAddNewListingStyles>(
  AddNewListingBase,
  getStyles
);
