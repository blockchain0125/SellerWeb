import { classNamesFunction, styled } from "@fluentui/utilities";
import React from "react";
import { getStyles } from "./Summary.styles";
import { ISummaryProps, ISummaryStyleProps, ISummaryStyles } from "./Summary.types";
import { RegisterWizardPageLayout } from "../shared/RegisterWizardPageLayout";
import { InfoBox } from "../../shared/InfoBox";

const getClassNames = classNamesFunction<ISummaryStyleProps, ISummaryStyles>();

const sellerTypeData = [
  {
    headline: "Name",
    content: "John Doe",
  },
  {
    headline: "PAN card number",
    content: "000000000",
  },
  {
    headline: "Aadhar card number",
    content: "1234 1234 1234",
  },
];

const contactData = [
  {
    headline: "Date of birth",
    content: "06/08/1992",
  },
  {
    headline: "Address Line 1",
    content: "First Avenue",
  },
  {
    headline: "City / Town / Village",
    content: "New York City",
  },
  {
    headline: "State / Province / Region",
    content: "New York",
  },
  {
    headline: "Postal / Zip Code",
    content: "10011",
  },
  {
    headline: "Country",
    content: "United States",
  },
];

const billingData = [
  {
    headline: "Account name",
    content: "Kate Smith",
  },
  {
    headline: "Account Number",
    content: "123456789",
  },
  {
    headline: "Bank name",
    content: "Bank of America",
  },
  {
    headline: "Bank Address",
    content: "Third Avenue",
  },
  {
    headline: "IFSC Code",
    content: "AAAA1234567",
  },
];

const storeData = [
  {
    headline: "Store name",
    content: "Testing XYZ",
  },
  {
    headline: "Do you have univeral product codes ( UPCs ) for all your products?",
    content: "Yes",
  },
  {
    headline:
      "Are you the manufacturer or brand owner ( or agent or representative of the brand ) for any of the product you want to sell on Amazon",
    content: "Third Avenue",
  },
  {
    headline: "Do you own government-registered trademark for the branded product you want to sell on Amazon?",
    content: "Third Avenue",
  },
];

const SummaryBase = ({ styles }: ISummaryProps) => {
  const classNames = getClassNames(styles);
  return (
    <RegisterWizardPageLayout
      body={
        <>
          <h2 className={`${classNames.headline} heading2`}>Summary</h2>
          <div className={classNames.infoBoxContainer}>
            <h3 className={classNames.smallerHeadline}>1. Seller type</h3>
            <div className={classNames.gridHolder}>
              {sellerTypeData.map((seller, index) => (
                <InfoBox key={index} headline={seller.headline}>
                  {seller.content}
                </InfoBox>
              ))}
            </div>
          </div>
          <div className={classNames.infoBoxContainer}>
            <h3 className={classNames.smallerHeadline}>2. Contact and address details</h3>
            <div className={classNames.gridHolder}>
              {contactData.map((contact, index) => (
                <InfoBox key={index} headline={contact.headline}>
                  {contact.content}
                </InfoBox>
              ))}
            </div>
          </div>
          <div className={classNames.infoBoxContainer}>
            <h3 className={classNames.smallerHeadline}>3. Billing</h3>
            <div className={classNames.gridHolder}>
              {billingData.map((billing, index) => (
                <InfoBox key={index} headline={billing.headline}>
                  {billing.content}
                </InfoBox>
              ))}
            </div>
          </div>
          <div className={classNames.infoBoxContainer}>
            <h3 className={classNames.smallerHeadline}>4. Store</h3>
            <div className={classNames.gridHolderOneLine}>
              {storeData.map((store, index) => (
                <InfoBox key={index} headline={store.headline}>
                  {store.content}
                </InfoBox>
              ))}
            </div>
          </div>
        </>
      }
    />
  );
};

export const Summary = styled<ISummaryProps, ISummaryStyleProps, ISummaryStyles>(SummaryBase, getStyles);
