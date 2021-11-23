import { useState } from "react";
import { styled, classNamesFunction } from "@fluentui/utilities";

import { getStyles } from "./ShipmentPage.styles";
import { AllShipments } from "../../../models/AllShipments";
import { IShipmentProps, IShipmentStyleProps, IShipmentStyles } from "./ShipmentPage.type";

import { Field } from "../../shared/Field";
import { StrongTypedTable } from "../../shared/Table";
import { ISelectOption, Select } from "../../shared/Select";
import { TableToolbar } from "../../shared/Table/TableToolbar";
import { mockShipments } from "../../../mockData/mockShipments";

import {
  dateOptions,
  productTypeOptions,
  shipmentTabs,
  allShipmentsTableColumns,
  newShipmentTableColumns,
  deliveredShipmentTableColumns,
  failedShipmentTableColumns,
} from "./utils";
import { ShipmentRow } from "../ShipmentRow";
import { ShipmentTabs } from "./index";

// Strong typed table define.
const Table = StrongTypedTable<AllShipments>();

// get class names.
const getClassNames = classNamesFunction<IShipmentStyleProps, IShipmentStyles>();

// render details row: for all shipments page.
const renderRow = (item: AllShipments) => (
  <ShipmentRow item={item} totalColumns={allShipmentsTableColumns.length} shipmentTab={ShipmentTabs.allShipments} />
);

// render row: for new shipment
const renderNewShipment = (item: AllShipments) => (
  <ShipmentRow item={item} totalColumns={newShipmentTableColumns.length} shipmentTab={ShipmentTabs.newShipment} />
);
// render row: for return delivered
const renderDelivered = (item: AllShipments) => (
  <ShipmentRow item={item} totalColumns={deliveredShipmentTableColumns.length} shipmentTab={ShipmentTabs.delivered} />
);
// render row: for return failed
const renderFailed = (item: AllShipments) => (
  <ShipmentRow item={item} totalColumns={failedShipmentTableColumns.length} shipmentTab={ShipmentTabs.failed} />
);

// get key ITableProps define.
const getKey = (item: AllShipments) => item.id;

const ShipmentRowBase = ({ styles }: IShipmentProps) => {
  const classNames = getClassNames(styles);
  const [activeTabKey, onTabChange] = useState("all-shipments"); // all-shipments
  const [selectedDateOption, setSelectedDateOption] = useState<ISelectOption>(dateOptions[0]);
  const [selectedTypeOption, setSelectedTypeOption] = useState<ISelectOption>(productTypeOptions[0]);

  // tab related render row.
  // const onRenderRow = activeTabKey === "all-shipments" ? renderRow : renderNewShipment;
  const onRenderRow =
    activeTabKey === "all-shipments"
      ? renderRow
      : activeTabKey === "new-shipment"
      ? renderNewShipment
      : activeTabKey === "delivered"
      ? renderDelivered
      : activeTabKey === "faild"
      ? renderFailed
      : renderFailed;

  return (
    <div className={classNames.root}>
      <div className="relative">
        <div className="text-grey80 text-2xl font-semibold pt-3">Shipment</div>
      </div>
      <div className="mt-3 bg-white">
        <TableToolbar tabs={shipmentTabs} activeTabKey={activeTabKey} onTabChange={onTabChange} />
        <div className="p-4 pt-0">
          <div className="my-3 flex">
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
          </div>
          <Table
            id="customTbl"
            onRenderRow={onRenderRow}
            getKey={getKey}
            columns={
              activeTabKey === "all-shipments"
                ? allShipmentsTableColumns
                : activeTabKey === "new-shipment"
                ? newShipmentTableColumns
                : activeTabKey === "delivered"
                ? deliveredShipmentTableColumns
                : activeTabKey === "failed"
                ? failedShipmentTableColumns
                : allShipmentsTableColumns
            }
            itemsPerPage={5}
            items={mockShipments}
            pageButtonNumber={5}
          />
        </div>
      </div>
    </div>
  );
};

export const Shipment = styled<IShipmentProps, IShipmentStyleProps, IShipmentStyles>(ShipmentRowBase, getStyles);
