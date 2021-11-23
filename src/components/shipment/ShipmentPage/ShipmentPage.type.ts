import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";

export interface IShipmentProps {
  styles?: IStyleFunctionOrObject<IShipmentStyleProps, IShipmentStyles>;
}

export interface IShipmentStyleProps {}

export interface IShipmentStyles {
  root?: IStyle;
  // content: IStyle;
}

// consist of (4) Shipment Tabs:
// (1) AllShipments "All Shipments",
// (2) New Shipment "New Shipment",
// (3) Delivered "Delivered Shipments"
// (4) failed "Failed Shipments"
export enum ShipmentTabs {
  allShipments,
  newShipment,
  delivered,
  failed,
}
