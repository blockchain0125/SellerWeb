import { Story, Meta } from "@storybook/react/types-6-0";
import { ITableToolbarProps, TableToolbar } from "../src/components/shared/Table/TableToolbar";
export default {
  title: "Table Toolbar",
  component: TableToolbar,
} as Meta;

const Template: Story<ITableToolbarProps> = (args) => (
  <div className="bg-background p-4">
    <TableToolbar {...args} />
  </div>
);

export const DefaultTableToolbar = Template.bind({});
DefaultTableToolbar.args = {
  tabs: [
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
  ],
} as ITableToolbarProps;
