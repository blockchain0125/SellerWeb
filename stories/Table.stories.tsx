import { Meta, Story } from "@storybook/react/types-6-0";
import { ProductDetailRow } from "../src/components/listing/ProductDetailRow";
import { ITableColumn, ITableProps, Table } from "../src/components/shared/Table";
import { mockProductDetails } from "../src/mockData/mockProductDetails";
import { ProductDetails } from "../src/models/ProductDetails";

export default {
  title: "Table",
  component: Table,
  args: {
    onRenderRow: null,
  },
} as Meta;

const Template: Story<ITableProps> = (args) => <Table {...args} />;

interface GroupItem {
  id: string;
  imageUrl?: string;
  name: string;
  listingNumber: number;
}

const groupItems: GroupItem[] = [
  {
    id: "1",
    name: "HyperX Cloud II",
    listingNumber: 25,
    imageUrl: "/images/nintendo.png",
  },
  {
    id: "2",
    name: "Alcatel 1B (2020)",
    listingNumber: 20,
    imageUrl: "/images/macbook.png",
  },
];

const groupTableColumns: ITableColumn<GroupItem>[] = [
  {
    key: "image",
    name: "Product Image",
    onRender: (item) => <img src={item.imageUrl} alt="image" />,
  },
  {
    key: "name",
    name: "Product Name",
    fieldName: "name",
  },
  {
    key: "listingNumber",
    name: "No. Of Listings",
    fieldName: "listingNumber",
    bodyClassName: "text-center",
  },
];

export const GroupTable = Template.bind({});
GroupTable.args = {
  items: groupItems,
  columns: groupTableColumns,
  getKey: (item) => item.id,
  striped: true,
} as ITableProps<GroupItem>;

const detailsTableColumns: ITableColumn<ProductDetails>[] = [
  {
    key: "image",
    name: "Product Image",
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

export const DetailsTable = Template.bind({});
DetailsTable.args = {
  onRenderRow: (item) => <ProductDetailRow item={item} totalColumns={detailsTableColumns.length} />,
  getKey: (item) => item.id,
  items: mockProductDetails,
  columns: detailsTableColumns,
  itemsPerPage: 2,
  pageButtonNumber: 5,
} as ITableProps<ProductDetails>;

/**
 * example of override row & cell styles
 * Inline styles for example only. Always define styles in *.styles.ts file
 */

const overrideStylesColumns: ITableColumn<GroupItem>[] = [
  {
    key: "image",
    name: "Product Image",
    onRender: (item) => <img src={item.imageUrl} alt="image" />,
  },
  {
    key: "name",
    name: "Product Name",
    fieldName: "name",
  },
  {
    key: "listingNumber",
    name: "No. Of Listings",
    fieldName: "listingNumber",
    bodyStyles: {
      paddingTop: "3rem", // override default 2rem
      fontSize: "30px", // override default font size
    },
  },
];
export const OverrideTableStyles = Template.bind({});
OverrideTableStyles.args = {
  items: groupItems,
  columns: overrideStylesColumns,
  getKey: (item) => item.id,
  striped: true,
  styles: {
    subComponentStyles: {
      tableRow: {
        root: {
          border: "1px solid red",
        },
      },
    },
  },
} as ITableProps<GroupItem>;
