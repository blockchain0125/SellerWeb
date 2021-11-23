import { Story, Meta } from "@storybook/react/types-6-0";
import { DataGrid, IDataGridProps } from "../src/components/shared/DataGrid";

export default {
  title: "Data Grid",
  component: DataGrid,
} as Meta;

const Template: Story<IDataGridProps> = (args) => <DataGrid {...args} />;

export const BasicDataGrid = Template.bind({});
BasicDataGrid.args = {
  items: [
    {
      label: "Created On",
      value: "Apr 1, 2021",
    },
    {
      label: "Category",
      value: "Games Accessories",
    },
    {
      label: "Closed Date",
      value: "May 1, 2021",
    },
    {
      label: "Online Shops",
      value: "London XYZ",
    },
    {
      label: "QTY Available",
      value: 100,
    },
    {
      label: "Price Offer",
      value: "$54",
    },
    {
      label: "Min Qty",
      value: 25,
    },
    {
      label: "Retail Price",
      value: "$72",
    },
  ],
} as IDataGridProps;
