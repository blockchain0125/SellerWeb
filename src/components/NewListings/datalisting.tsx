import { ReactNode } from "react";
import { ISelectOption } from "../shared/Select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay, faCalendarWeek } from "@fortawesome/free-solid-svg-icons";
import { ITableColumn } from "../shared/Table";
import { VariantDetails } from "../../models/VariantDetails";

// temporary data
export const store = [
  {
    storeName: "Store Name",
    locations: "India / New Delhi / Ghaziabad",
  },
  {
    storeName: "Store Name",
    locations: "India / New Delhi / Ghaziabad",
  },
  {
    storeName: "Store Name",
    locations: "India / New Delhi / Ghaziabad",
  },
  {
    storeName: "Store Name",
    locations: "India / New Delhi / Ghaziabad",
  },
  {
    storeName: "Store Name",
    locations: "India / New Delhi / Ghaziabad",
  },
  {
    storeName: "Store Name",
    locations: "India / New Delhi / Ghaziabad",
  },
  {
    storeName: "Store Name",
    locations: "India / New Delhi / Ghaziabad",
  },
  {
    storeName: "Store Name",
    locations: "India / New Delhi / Ghaziabad",
  },
  {
    storeName: "Store Name",
    locations: "India / New Delhi / Ghaziabad",
  },
];

const makeISelectOption = (value: string, display: ReactNode): ISelectOption => {
  return {
    value,
    display,
  };
};

export const productTypeOptions: ISelectOption[] = [makeISelectOption("gaming", "Gaming")];
export const categoryTypeOptions: ISelectOption[] = [makeISelectOption("accessories", "Game Accessories")];
export const vendorTypeOptions: ISelectOption[] = [makeISelectOption("store", "Store Name")];
export const brandTypeOptions: ISelectOption[] = [makeISelectOption("address", "Address")];

export const startDateOptions: ISelectOption[] = [
  {
    value: "7d",
    display: (
      <div>
        <FontAwesomeIcon icon={faCalendarDay} className="mr-2" /> May 1, 2021 - 4 days
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

export const endDateOptions: ISelectOption[] = [
  {
    value: "7d",
    display: (
      <div>
        <FontAwesomeIcon icon={faCalendarDay} className="mr-2" /> May 1, 2021 - 4 days
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

export const detailsTableColumns: ITableColumn<VariantDetails>[] = [
  {
    key: "name",
    name: "Variant Name",
  },
  {
    key: "attributes",
    name: "Attributes",
  },
  {
    key: "sku",
    name: "SKU",
  },
  {
    key: "wholesale",
    name: "Wholesale",
  },
  {
    key: "retailPrice",
    name: "Retail Price",
  },
  {
    key: "qty",
    name: "QTY",
  },
];

export const deliveryDetailsOption = [
  { detail: "Delivered Directly To Customer Through Courier" },
  { detail: "Customer Picking Up From Intermediate Location/Fulfillment Centre" },
  { detail: "Customer Picking Product From Seller Location" },
  { detail: "Seller Directly Delivering Product To Customer Address" },
];

export enum categoryListType {
  TimeLeft,
  RefundPolicy,
}

export const newProduct = {
  title: "E-Blue Auroza-Gaming Mouse",
  price: 72,
  discountPrice: 54,
  discountPromo: 30,
  category: "Games Accessories",
  sku: "000000",
  brand: "E-Blue",
  shop: "London XYZ",
  delivery: "Directly To Customer Through Courier",
  refund: "Refund And Replacement",
  refundPolicy: "Days The Prodcut Can Be Return",
  refundPayment: "Return Is Paid By Customer",
  createdOn: "May 01, 2021",
  dueDate: "May 10, 2021",
  qtyAvailable: 100,
  timeLeft: 10,
};

export const productImages = [
  {
    id: 0,
    source: "http://placeimg.com/640/480/people",
  },
  {
    id: 1,
    source: "http://placeimg.com/640/480/city",
  },
  {
    id: 2,
    source: "http://placeimg.com/640/480/cats",
  },
  {
    id: 3,
    source: "http://placeimg.com/640/480/business",
  },
];
