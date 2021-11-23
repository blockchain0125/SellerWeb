import { classNamesFunction, styled } from "@fluentui/utilities";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import dayjs from "dayjs";
import { Field } from "../../shared/Field";
import { Input } from "../../shared/Input";
import { ISelectOption, Select } from "../../shared/Select";
import { RegisterWizardPageLayout } from "../shared/RegisterWizardPageLayout";
import { getStyles } from "./ContactAddress.styles";
import { IContactAddressProps, IContactAddressStyleProps, IContactAddressStyles } from "./ContactAddress.types";
import { range } from "lodash-es";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const getClassNames = classNamesFunction<IContactAddressStyleProps, IContactAddressStyles>();

const today = dayjs();

const dayOptions: ISelectOption[] = range(1, 32).map((day: number) => ({
  value: day.toString(10),
  display: day,
}));

const monthOptions: ISelectOption[] = range(0, 12).map((month) => ({
  value: month.toString(10),
  display: today.month(month).format("MMM"),
}));

const yearOptions: ISelectOption[] = range(today.year(), 1990).map((year) => ({
  value: year.toString(10),
  display: year,
}));

const countryOptions: ISelectOption[] = [
  {
    value: "us",
    display: "United States",
  },
  {
    value: "cn",
    display: "China",
  },
];

const ContactAddressBase = ({ styles }: IContactAddressProps) => {
  const {
    subComponentStyles: { select },
  } = getClassNames(styles);
  return (
    <RegisterWizardPageLayout
      body={
        <div className="h-full flex flex-col">
          <div className="flex-grow">
            <h2 className="text-3xl font-semibold text-grey80 mb-2.5">Contact and address details</h2>
            <p className="text-base text-grey80 mb-8">Business main information and contacts</p>
            <div className="text-grey80 font-bold">
              Individual Information <FontAwesomeIcon icon={faInfoCircle} className="ml-3 text-sm" />
            </div>
            <div className="mb-6">
              <label className="text-grey80 text-xs">Date of birth</label>
              <div className="flex space-x-2 max-w-xs">
                <Select options={dayOptions} styles={select} />
                <Select options={monthOptions} styles={select} />
                <Select options={yearOptions} styles={select} />
              </div>
            </div>
            <div className="max-w-xl grid grid-cols-2 gap-x-5 gap-y-6">
              <Input rounded={false} label="Address Line 1" materialStyleLabel={false} />
              <Input rounded={false} label="Address Line 2" materialStyleLabel={false} />
              <Input rounded={false} label="City/Town/Village" materialStyleLabel={false} />
              <Input rounded={false} label="State/Province/Region" materialStyleLabel={false} />
              <Input rounded={false} label="Postal/Zip Code" materialStyleLabel={false} />
              <Field label="Country" materialStyleLabel={false}>
                <Select options={countryOptions} styles={select} />
              </Field>
            </div>
          </div>
          <div className="text-grey80 text-sm">
            **** By clicking on “Next” you agree to accept the following policies, agreements and notices:
          </div>
        </div>
      }
    />
  );
};

export const ContactAddress = styled<IContactAddressProps, IContactAddressStyleProps, IContactAddressStyles>(
  ContactAddressBase,
  getStyles
);
