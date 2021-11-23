import { classNamesFunction, styled } from "@fluentui/utilities";
import { faSave } from "@fortawesome/free-regular-svg-icons";
import { faExclamationTriangle, faPen, faRedo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { CustomButton } from "../../shared/CustomButton/CustomButton";
import { Input } from "../../shared/Input/Input";
import { Select } from "../../shared/Select";
import { endDateOptions, startDateOptions } from "../datalisting";
import { getStyles } from "./ListingOffer.styles";
import { IListingOfferProps, IListingOfferStyleProps, IListingOfferStyles } from "./ListingOffer.types";

const getClassNames = classNamesFunction<IListingOfferStyleProps, IListingOfferStyles>();

const onChange = (): void => {
  return;
};
const ListingOfferBase = ({ styles }: IListingOfferProps) => {
  const classNames = getClassNames(styles);
  return (
    <div className="px-8 py-4">
      <div className="text-lg text-messenger font-semibold">Listing Offer</div>

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Retail Price"
          styles={classNames.subComponentStyles.input}
          materialStyleLabel={false}
          type="text"
        />
        <Input
          label="Wholesale"
          styles={classNames.subComponentStyles.input}
          materialStyleLabel={false}
          type="text"
          rightIcon={<FontAwesomeIcon icon={faPen} className="text-grey40 mt-4" />}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Input label="Save (%)" styles={classNames.subComponentStyles.input} materialStyleLabel={false} type="text" />
        <Input label="Profit (%)" styles={classNames.subComponentStyles.input} materialStyleLabel={false} type="text" />
      </div>

      <div className="grid grid-cols-2 gap-4 mt-8">
        <Input
          label="QTY Available"
          styles={classNames.subComponentStyles.input}
          materialStyleLabel={false}
          type="number"
          rightIcon={<FontAwesomeIcon icon={faPen} className="text-grey40 mt-4" />}
        />
        <Input
          label="Min QTY"
          styles={classNames.subComponentStyles.input}
          materialStyleLabel={false}
          type="number"
          rightIcon={<FontAwesomeIcon icon={faPen} className="text-grey40 mt-4" />}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className={classNames.label}>Start Date</div>
          <Select
            options={startDateOptions}
            selectedOption={startDateOptions[0]}
            onSelectedOptionChange={onChange}
            styles={classNames.subComponentStyles.select}
          />
        </div>
        <div>
          <div className={classNames.label}>End Date</div>
          <Select
            options={endDateOptions}
            selectedOption={endDateOptions[0]}
            onSelectedOptionChange={onChange}
            styles={classNames.subComponentStyles.select}
          />
        </div>
      </div>

      <div className="text-primary text-sm mt-12">
        <FontAwesomeIcon icon={faExclamationTriangle} className="text-primary mr-4" />
        There are only 90 products available in the inventory please adjust!
      </div>

      <div className="flex justify-end mt-12 text-center">
        <CustomButton
          rounded
          icon={<FontAwesomeIcon icon={faRedo} className="text-grey80" />}
          styles={classNames.subComponentStyles.button}
          label="Clear"
          customClass="w-32 border border-solid border-grey80"
        />
        <CustomButton
          rounded
          icon={<FontAwesomeIcon icon={faSave} className="text-white" />}
          styles={classNames.subComponentStyles.button}
          label="Save Offer"
          customClass="w-44 bg-primary text-white"
        />
      </div>
    </div>
  );
};

export const ListingOffer = styled<IListingOfferProps, IListingOfferStyleProps, IListingOfferStyles>(
  ListingOfferBase,
  getStyles
);
