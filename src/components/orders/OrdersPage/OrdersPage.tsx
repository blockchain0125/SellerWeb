import { useState } from "react";
import { styled, classNamesFunction } from "@fluentui/utilities";

import { getStyles } from "./OrdersPage.styles";
import { OrderDetails } from "../../../models/OrderDetails";
import { IOrdersProps, IOrdersStyleProps, IOrdersStyles } from "./OrdersPage.type";

import { Field } from "../../shared/Field";
import { StrongTypedTable } from "../../shared/Table";
import { ISelectOption, Select } from "../../shared/Select";
import { TableToolbar } from "../../shared/Table/TableToolbar";
import { mockOrdersDetails } from "../../../mockData/mockOrdersDetails";

import {
  dateOptions,
  productTypeOptions,
  orderTabs,
  detailsTableColumns,
  allOrdersTableColumns,
  acceptRejectTableColumns,
} from "./utils";
import { OrdersRow } from "../OrdersRow";
import { OrderDetailsRow } from "../OrderDetailsRow";
import { OrderTabs } from "./index";

// Strong typed table define.
const Table = StrongTypedTable<OrderDetails>();

// get class names.
const getClassNames = classNamesFunction<IOrdersStyleProps, IOrdersStyles>();

// render details row: for all-orders page.
const renderDetilsRow = (item: OrderDetails) => (
  <OrderDetailsRow item={item} totalColumns={allOrdersTableColumns.length} />
);

// render row: for orders-by-listing
const renderRowByListings = (item: OrderDetails) => (
  <OrdersRow item={item} totalColumns={detailsTableColumns.length} orderTab={OrderTabs.ordersByListings} />
);
// render row: for return-accept/reject.
const renderRowAcceptReject = (item: OrderDetails) => (
  <OrdersRow item={item} totalColumns={acceptRejectTableColumns.length} orderTab={OrderTabs.acceptReject} />
);

// get key ITableProps define.
const getKey = (item: OrderDetails) => item.id;

/**
 * Order base component.
 *
 * @param {*} styles
 * @returns {Component}
 *
 */
const OrdersBase = ({ styles }: IOrdersProps) => {
  const classNames = getClassNames(styles);
  const [activeTabKey, onTabChange] = useState("all-orders"); // orders-by-listings
  const [selectedDateOption, setSelectedDateOption] = useState<ISelectOption>(dateOptions[0]);
  const [selectedTypeOption, setSelectedTypeOption] = useState<ISelectOption>(productTypeOptions[0]);

  // tab related render row.
  // const onRenderRow = activeTabKey === "all-orders" ? renderDetilsRow : renderRowByListings;
  const onRenderRow =
    activeTabKey === "all-orders"
      ? renderDetilsRow
      : activeTabKey === "orders-by-listings"
      ? renderRowByListings
      : activeTabKey === "accept-reject"
      ? renderRowAcceptReject
      : renderRowAcceptReject;

  return (
    <div className={classNames.root}>
      <div className="relative">
        <div className="text-grey80 text-2xl font-semibold pt-3">Orders</div>
      </div>
      <div className="mt-3">
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
        </div>
      </div>
      <div className="mt-3 bg-white">
        <TableToolbar tabs={orderTabs} activeTabKey={activeTabKey} onTabChange={onTabChange} />
        <div className="p-4 pt-0">
          <Table
            onRenderRow={onRenderRow}
            getKey={getKey}
            columns={
              activeTabKey === "all-orders"
                ? allOrdersTableColumns
                : activeTabKey === "orders-by-listings"
                ? detailsTableColumns
                : activeTabKey === "accept-reject"
                ? acceptRejectTableColumns
                : acceptRejectTableColumns
            }
            itemsPerPage={5}
            items={mockOrdersDetails}
            pageButtonNumber={5}
          />
        </div>
      </div>
    </div>
  );
};

export const Orders = styled<IOrdersProps, IOrdersStyleProps, IOrdersStyles>(OrdersBase, getStyles);
