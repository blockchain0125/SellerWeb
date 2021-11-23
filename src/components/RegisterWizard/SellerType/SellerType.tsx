import { classNamesFunction, styled } from "@fluentui/utilities";
import { Link } from "react-router-dom";
import { ReactNode } from "react";
import cn from "classnames";
import { getStyles } from "./SellerType.styles";
import { RegisterWizardPageLayout } from "../shared/RegisterWizardPageLayout";
import { ISellerTypeProps, ISellerTypeStyleProps, ISellerTypeStyles } from "./SellerType.types";
import { Field } from "../../shared/Field";
import { Select, ISelectOption } from "../../shared/Select";
import { Input } from "../../shared/Input";
import { List } from "../shared/List";
import { ListItem } from "../shared/ListItem";

const makeISelectOption = (value: string, display: ReactNode): ISelectOption => {
  return {
    value,
    display,
  };
};

export const businessTypeOptions: ISelectOption[] = [
  makeISelectOption("individual", "None, I am an individual"),
  makeISelectOption("company", "business seller"),
];

const onChange = (): void => {
  return;
};

const getClassNames = classNamesFunction<ISellerTypeStyleProps, ISellerTypeStyles>();

const SellerTypeBase = ({ styles }: ISellerTypeProps) => {
  const classNames = getClassNames(styles);
  return (
    <RegisterWizardPageLayout
      body={
        <>
          <h2 className="text-3xl font-semibold text-grey80 mb-9">Seller Type</h2>
          <p className="text-base text-grey80 font-semibold mb-6">Please have the following ready before you begin</p>
          <div className={classNames.checklistContainer}>
            <List>
              <ListItem>Your bank account details for receiving payment</ListItem>
              <ListItem>Tax ( GST/PAN ) details of your business</ListItem>
            </List>
          </div>
          <h3 className="text-2xl font-semibold text-grey80 mb-4">Enter details below to continue registeration</h3>
          <div className={classNames.fieldContainer}>
            <Field label="Business type" materialStyleLabel={false} styles={classNames.subComponentStyles.field}>
              <Select
                options={businessTypeOptions}
                selectedOption={businessTypeOptions[0]}
                onSelectedOptionChange={onChange}
                styles={classNames.subComponentStyles.select}
              />
            </Field>
          </div>
          <div className={classNames.fieldContainer}>
            <Field label="Your name" materialStyleLabel={false} styles={classNames.subComponentStyles.field}>
              <div className={classNames.row3Cols}>
                <Input rounded={false} type="text" placeholder="First name" />
                <Input rounded={false} type="text" placeholder="Middle name(s)" />
                <Input rounded={false} type="text" placeholder="Last name" />
              </div>
            </Field>
          </div>
          <div className={cn(classNames.fieldContainer, classNames.row2Cols)}>
            <Input
              styles={classNames.subComponentStyles.input}
              label="Aadhar card number"
              materialStyleLabel={false}
              rounded={false}
              type="number"
            />
            <Input
              styles={classNames.subComponentStyles.input}
              label="Upload document"
              rounded={false}
              type="file"
              materialStyleLabel={false}
            />
          </div>
          <div className={cn(classNames.fieldContainer, classNames.row2Cols)}>
            <Input
              styles={classNames.subComponentStyles.input}
              label="PAN card number"
              rounded={false}
              type="number"
              materialStyleLabel={false}
            />
            <Input
              styles={classNames.subComponentStyles.input}
              label="Upload document"
              rounded={false}
              type="file"
              materialStyleLabel={false}
            />
          </div>
          <div className={classNames.fieldContainer}>
            <Input
              styles={classNames.subComponentStyles.input}
              materialStyleLabel={false}
              label="Company / Business name"
              rounded={false}
              type="text"
            />
          </div>
          <div className={cn(classNames.fieldContainer, classNames.row2Cols)}>
            <Input
              styles={classNames.subComponentStyles.input}
              label="VAT number"
              materialStyleLabel={false}
              rounded={false}
              type="number"
            />
            <Input
              styles={classNames.subComponentStyles.input}
              materialStyleLabel={false}
              label="Upload document"
              rounded={false}
              type="file"
            />
          </div>
          <div className={cn(classNames.fieldContainer, classNames.row2Cols)}>
            <Input
              styles={classNames.subComponentStyles.input}
              materialStyleLabel={false}
              label="GSTIN number"
              rounded={false}
              type="number"
            />
            <Input
              styles={classNames.subComponentStyles.input}
              materialStyleLabel={false}
              label="Upload document"
              rounded={false}
              type="file"
            />
          </div>
        </>
      }
      footer={
        <>
          <h2 className="text-xl font-semibold text-grey80 mb-6">Seller Agreement</h2>
          <p className="text-sm text-grey80 mb-9">
            I have read and agree to comply with and/or be bound by the terms and conditions{" "}
            <Link to="#">Terms &amp; Conditions</Link>
          </p>
        </>
      }
    />
  );
};

export const SellerType = styled<ISellerTypeProps, ISellerTypeStyleProps, ISellerTypeStyles>(SellerTypeBase, getStyles);
