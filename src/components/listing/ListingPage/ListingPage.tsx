import { classNamesFunction, styled } from "@fluentui/utilities";
import { faCalendarDay, faCalendarWeek } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { mockProductDetails } from "../../../mockData/mockProductDetails";
import { ProductDetails } from "../../../models/ProductDetails";
import { CommonLayout } from "../../shared/CommonLayout";
import { CustomButton } from "../../shared/CustomButton";
import { Field } from "../../shared/Field";
import { ISelectOption, Select } from "../../shared/Select";
import { ITableColumn, StrongTypedTable } from "../../shared/Table";
import { TableToolbar } from "../../shared/Table/TableToolbar";
import { ProductDetailRow } from "../ProductDetailRow";
import { getStyles } from "./ListingPage.styles";
import { IListingPageProps, IListingPageStyleProps, IListingPageStyles } from "./ListingPage.types";

const getClassNames = classNamesFunction<IListingPageStyleProps, IListingPageStyles>();
const Table = StrongTypedTable<ProductDetails>();

const dateOptions: ISelectOption[] = [
  {
    value: "7d",
    display: (
      <div>
        <FontAwesomeIcon icon={faCalendarDay} className="mr-2" /> 7 days
      </div>
    ),
  },
  {
    value: "2w",
    display: (
      <div>
        <FontAwesomeIcon icon={faCalendarWeek} className="mr-2" /> 2 weeks
      </div>
    ),
  },
];

const productTypeOptions: ISelectOption[] = [
  {
    value: "all",
    display: (
      <div>
        <FontAwesomeIcon icon={faCalendarDay} className="mr-2" /> All Product Type
      </div>
    ),
  },
  {
    value: "a",
    display: (
      <div>
        <FontAwesomeIcon icon={faCalendarDay} className="mr-2" /> Product Type A
      </div>
    ),
  },
];

const locationOptions: ISelectOption[] = [
  {
    value: "london",
    display: "London XYZ St",
  },
  {
    value: "leeds",
    display: "Leeds XYZ St",
  },
  {
    value: "nyc",
    display: "New York XYZ St",
  },
];

const tabs = [
  {
    key: "listings",
    label: "Listings",
  },
  {
    key: "group",
    label: "Group",
  },
  {
    key: "low-purchase",
    label: "Low Purchase",
  },
  {
    key: "accept-reject",
    label: "Accept/Reject",
  },
  {
    key: "close-listings",
    label: "Close Listings",
  },
];

const detailsTableColumns: ITableColumn<ProductDetails>[] = [
  {
    key: "image",
    name: "Product Image",
    className: "pl-2",
  },
  {
    key: "details",
    name: "Listing Details",
  },
  {
    key: "recurring",
    name: "Recurring",
    minimum: true,
  },
  {
    key: "clone",
    name: "Clone",
    minimum: true,
  },
  {
    key: "more",
    name: "More",
    minimum: true,
  },
];

const onRenderRow = (item: ProductDetails) => (
  <ProductDetailRow item={item} totalColumns={detailsTableColumns.length} />
);
const getKey = (item: ProductDetails) => item.id;

const ListingPageBase = ({ styles }: IListingPageProps) => {
  const classNames = getClassNames(styles);
  const [selectedDateOption, setSelectedDateOption] = useState<ISelectOption>(dateOptions[0]);
  const [selectedTypeOption, setSelectedTypeOption] = useState<ISelectOption>(productTypeOptions[0]);
  const [selectedLocations, setSelectedLocations] = useState<ISelectOption[]>([locationOptions[0], locationOptions[1]]);
  return (
    <CommonLayout
      pageName="Listings"
      buttonGroup={<CustomButton noMargin rounded primary label="Add New Listings" />}
      filters={
        <div className="space-x-3 flex">
          <div className="w-46">
            <Field label="Date" materialStyleLabel={false}>
              <Select
                options={dateOptions}
                selectedOption={selectedDateOption}
                onSelectedOptionChange={setSelectedDateOption}
              />
            </Field>
          </div>
          <div className="w-46">
            <Field label="Product" materialStyleLabel={false}>
              <Select
                options={productTypeOptions}
                selectedOption={selectedTypeOption}
                onSelectedOptionChange={setSelectedTypeOption}
              />
            </Field>
          </div>
          <div className={classNames.locationSelectContainer}>
            <Field label="Selling Location" materialStyleLabel={false}>
              <Select
                multiSelect
                options={locationOptions}
                selectedOptions={selectedLocations}
                onSelectedOptionsChange={setSelectedLocations}
              />
            </Field>
          </div>
        </div>
      }
      content={
        <>
          <TableToolbar tabs={tabs} />
          <Table
            onRenderRow={onRenderRow}
            getKey={getKey}
            columns={detailsTableColumns}
            itemsPerPage={5}
            items={mockProductDetails}
          />
        </>
      }
    />
  );
};

export const ListingPage = styled<IListingPageProps, IListingPageStyleProps, IListingPageStyles>(
  ListingPageBase,
  getStyles
);
