import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay, faCalendarWeek } from "@fortawesome/free-solid-svg-icons";

import { AllShipments } from "../../../models/AllShipments";

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

// tabs define as: "All Shipments", "New Shipment", "Delivered", "Faild".
export const shipmentTabs = [
  {
    key: "all-shipments",
    label: "All Shipments",
  },
  {
    key: "new-shipment",
    label: "New shipment",
  },
  {
    key: "delivered",
    label: "Delivered",
  },
  {
    key: "failed",
    label: "Failed",
  },
];

// All shipments table columns define.
export const allShipmentsTableColumns: ITableColumn<AllShipments>[] = [
  {
    key: "id",
    name: "Order No.ID$",
  },
  {
    key: "shippedDate",
    name: "Shipped On Date",
  },
  {
    key: "status",
    name: "Status",
  },
  {
    key: "tracking",
    name: "Shipment Tracking",
  },
  {
    key: "shipmentStatus",
    name: "Shipment Status",
  },
  {
    key: "tax",
    name: "Tax & Duty",
  },
  {
    key: "cost",
    name: "Total Cost",
  },
  {
    key: "actions",
    name: "Actions",
  },
];

// New shipment table columns define.
export const newShipmentTableColumns: ITableColumn<AllShipments>[] = [
  {
    key: "id",
    name: "Order No.ID$",
  },
];

// New shipment table columns define.
export const deliveredShipmentTableColumns: ITableColumn<AllShipments>[] = [
  {
    key: "id",
    name: "Order No.ID$",
  },
];

// New shipment table columns define.
export const failedShipmentTableColumns: ITableColumn<AllShipments>[] = [
  {
    key: "id",
    name: "Order No.ID$",
  },
];
