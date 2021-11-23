import { classNamesFunction, styled } from "@fluentui/utilities";
import React, { useCallback, useState } from "react";
import { RadioButton } from "../../shared/RadioButton";
import { AddNewListing } from "./AddNewListing";
import { CustomerPickUpProduct } from "./CustomerPickUpProduct";
import { LocationAddresses } from "./LocationAddresses";
import { SellerDeliverProduct } from "./SellerDeliverProduct";
import { getStyles } from "./DeliveryListing.styles";
import { IDeliveryListingProps, IDeliveryListingStyleProps, IDeliveryListingStyles } from "./DeliveryListing.types";

const getClassNames = classNamesFunction<IDeliveryListingStyleProps, IDeliveryListingStyles>();

const DeliveryListingBase = ({ styles }: IDeliveryListingProps) => {
  const classNames = getClassNames(styles);
  const [selectOption, setSelectOption] = useState<string>("deliveredToCustomer");

  const onSelectDeliveryMethod = useCallback((method: string) => {
    setSelectOption(method);
  }, []);

  return (
    <div className={classNames.root}>
      <div className="grid grid-cols-2 gap-4 bg-white">
        <div className="py-4 px-10 flex flex-col flex-wrap content-center">
          <div className="text-lg text-messenger font-semibold">Delivery Details</div>
          <div>
            <RadioButton
              styles={classNames.subComponentStyles.radioButton}
              label="Delivered Directly To Customer Through Courier"
              value="deliveredToCustomer"
              checked={selectOption === "deliveredToCustomer"}
              name="delivered-directly-to-customer"
              onChange={onSelectDeliveryMethod}
            />
            <RadioButton
              styles={classNames.subComponentStyles.radioButton}
              label="Customer Picking Up From Intermediate Location/Fulfillment Centre"
              value="pickUpFromLocation"
              checked={selectOption === "pickUpFromLocation"}
              name="pick-up-from-location"
              onChange={onSelectDeliveryMethod}
            />
            <RadioButton
              styles={classNames.subComponentStyles.radioButton}
              label="Customer Picking Product From Seller Location"
              value="pickUpProductFromSeller"
              checked={selectOption === "pickUpProductFromSeller"}
              name="pick-up-product-from-product"
              onChange={onSelectDeliveryMethod}
            />
            <RadioButton
              styles={classNames.subComponentStyles.radioButton}
              label="Seller Directly Delivering Product To Customer Address"
              value="deliverProductToCustomer"
              checked={selectOption === "deliverProductToCustomer"}
              name="deliver-product-to-customer"
              onChange={onSelectDeliveryMethod}
            />
          </div>
        </div>

        <div className="py-4 px-10">
          {selectOption === "deliveredToCustomer" && <AddNewListing />}
          {selectOption === "pickUpFromLocation" && <LocationAddresses />}
          {selectOption === "pickUpProductFromSeller" && <CustomerPickUpProduct />}
          {selectOption === "deliverProductToCustomer" && <SellerDeliverProduct />}
        </div>
      </div>
    </div>
  );
};

export const DeliveryListing = styled<IDeliveryListingProps, IDeliveryListingStyleProps, IDeliveryListingStyles>(
  DeliveryListingBase,
  getStyles
);
