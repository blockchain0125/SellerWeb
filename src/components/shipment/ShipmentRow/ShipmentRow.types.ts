import { IStyle } from "@fluentui/style-utilities";
import { IStyleFunctionOrObject } from "@fluentui/utilities";
import { AllShipments } from "../../../models/AllShipments";
import { ShipmentTabs } from "../ShipmentPage";

export interface IShipmentRowProps {
  styles?: IStyleFunctionOrObject<IShipmentRowStyleProps, IShipmentRowStyles>;
  item: AllShipments;
  totalColumns: number;
  shipmentTab: ShipmentTabs;
}

export interface IShipmentRowStyleProps {}

export interface IShipmentRowStyles {
  tr?: IStyle;
  id?: IStyle;
  shippedDate?: IStyle;
  status?: IStyle;
  tracking?: IStyle;
  shipmentStatus?: IStyle;
  shipmentStatusDate?: IStyle;
  tax?: IStyle;
  cost?: IStyle;
}
