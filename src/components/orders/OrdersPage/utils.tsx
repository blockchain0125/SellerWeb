import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay, faCalendarWeek } from "@fortawesome/free-solid-svg-icons";

import { OrderDetails } from "../../../models/OrderDetails";

import { ISelectOption } from "../../shared/Select";
import { ITableColumn } from "../../shared/Table";

export const dateOptions: ISelectOption[] = [
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

export const productTypeOptions: ISelectOption[] = [
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

// tabs define as: "All Orders", "Orders By Listings", "Return Accept / Reject".
export const orderTabs = [
  {
    key: "all-orders",
    label: "All Orders",
  },
  {
    key: "orders-by-listings",
    label: "Orders By Listings",
  },
  {
    key: "accept-reject",
    label: "Return Accept / Reject",
  },
];

// All Orders table columns define.
export const allOrdersTableColumns: ITableColumn<OrderDetails>[] = [
  {
    key: "id",
    name: "Order",
  },
  {
    key: "image",
    name: "Product Image",
  },
  {
    key: "name",
    name: "Product Name",
  },
  {
    key: "retail",
    name: "Retail Price",
  },
  {
    key: "wholesale",
    name: "Wholesale",
  },
  {
    key: "payment",
    name: "Payment Status",
  },
  {
    key: "delivery",
    name: "Delivery Status",
  },
  {
    key: "actions",
    name: "Actions",
  },
];

// details table columns define.
export const detailsTableColumns: ITableColumn<OrderDetails>[] = [
  {
    key: "id",
    name: "Order",
  },
  {
    key: "image",
    name: "Product Image",
  },
  {
    key: "name",
    name: "Product Name",
  },
  {
    key: "retail",
    name: "Retail Price",
  },
  {
    key: "wholesale",
    name: "Wholesale",
  },
  {
    key: "total",
    name: "Total Orders",
  },
  {
    key: "returned",
    name: "Returned",
  },
  {
    key: "delivered",
    name: "Delivered",
  },
  {
    key: "status",
    name: "Order Status",
  },
  {
    key: "actions",
    name: "Actions",
  },
];

// Return Accept / Reject table columns define.
export const acceptRejectTableColumns: ITableColumn<OrderDetails>[] = [
  {
    key: "id",
    name: "Order",
  },
  {
    key: "image",
    name: "Product Image",
  },
  {
    key: "name",
    name: "Product Name",
  },
  {
    key: "wholesale",
    name: "Wholesale",
  },
  {
    key: "total",
    name: "Total Orders",
  },
  {
    key: "status",
    name: "Order Status",
  },
  {
    key: "actions",
    name: "Actions",
  },
];
