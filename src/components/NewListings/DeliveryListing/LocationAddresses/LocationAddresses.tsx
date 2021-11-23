import { classNamesFunction, styled } from "@fluentui/utilities";
import { DeliveryDetailsWizardPageLayout } from "../DeliveryDetailsWizardPageLayout";
import { ReactNode } from "react";
import { Select, ISelectOption } from "../../../shared/Select";
import { getStyles } from "./LocationAddresses.styles";
import {
  ILocationAddressesProps,
  ILocationAddressesStyleProps,
  ILocationAddressesStyles,
} from "./LocationAddresses.types";

const getClassNames = classNamesFunction<ILocationAddressesStyleProps, ILocationAddressesStyles>();

const makeISelectOption = (value: string, display: ReactNode): ISelectOption => {
  return {
    value,
    display,
  };
};

export const Store1Options: ISelectOption[] = [makeISelectOption("select", "Address Selected")];
export const Store2Options: ISelectOption[] = [
  makeISelectOption("select", "Please Choose Address From Menu"),
  makeISelectOption("address1", "1-10, Dhakuria E Rd, Safui Para, Neli Nagar, Haltu"),
  makeISelectOption("address2", "Biswanath Colony, Sinthee, Kolkata, West Bangal 700050, India"),
  makeISelectOption("address3", "47, 15, Ram Krishna Ghosh Rd, Sinthee"),
  makeISelectOption("address4", "23, 49, Gariahat Rd, Opposite Ram Khrishna Mission, Dhakuria"),
];

const onChange = (): void => {
  return;
};

const LocationAddressesBase = ({ styles }: ILocationAddressesProps) => {
  const classNames = getClassNames(styles);
  return (
    <div className={classNames.root}>
      <DeliveryDetailsWizardPageLayout
        title="Fulfillment Location Addresses"
        body={
          <>
            <label>
              For <strong>Store 1</strong>
            </label>
            <Select
              options={Store1Options}
              selectedOption={Store1Options[0]}
              onSelectedOptionChange={onChange}
              styles={classNames.subComponentStyles.select}
            />
            <div className="my-4 ml-8">
              <p>HCM4+7m5, EB Block, Sector 1, Bidhannagar</p>
              <p>Kolkata, West Bangal</p>
              <p>700064, India</p>
            </div>

            <label>
              For <strong>Store 2</strong>
            </label>
            <Select
              options={Store2Options}
              selectedOption={Store2Options[0]}
              onSelectedOptionChange={onChange}
              styles={classNames.subComponentStyles.select}
            />

            <label className="block mt-4">
              For <strong>Store 3</strong>
            </label>
            <Select
              options={Store1Options}
              selectedOption={Store1Options[0]}
              onSelectedOptionChange={onChange}
              styles={classNames.subComponentStyles.select}
            />

            <div className="my-4 ml-8">
              <p>47, 15, Ram Krisha Ghosh Rd, Sinthee</p>
              <p>Kolkata, West Bangal</p>
              <p>700050, India</p>
            </div>

            <label>
              For <strong>Store 4</strong>
            </label>
            <Select
              options={Store1Options}
              selectedOption={Store1Options[0]}
              onSelectedOptionChange={onChange}
              styles={classNames.subComponentStyles.select}
            />

            <div className="my-4 ml-8">
              <p>1-10, Dhakuria E Rd, Safui Para, Neli Nagar, Haltu</p>
              <p>Kolkata, West Bangal</p>
              <p>700078, India</p>
            </div>

            <label>
              For <strong>Store 5</strong>
            </label>
            <Select
              options={Store2Options}
              selectedOption={Store2Options[0]}
              onSelectedOptionChange={onChange}
              styles={classNames.subComponentStyles.select}
            />
          </>
        }
      />
    </div>
  );
};

export const LocationAddresses = styled<
  ILocationAddressesProps,
  ILocationAddressesStyleProps,
  ILocationAddressesStyles
>(LocationAddressesBase, getStyles);
