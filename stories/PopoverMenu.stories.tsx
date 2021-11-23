import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Meta, Story } from "@storybook/react/types-6-0";
import { IPopoverMenuProps, PopoverMenu } from "../src/components/shared/PopoverMenu";

export default {
  title: "Popover Menu",
  component: PopoverMenu,
} as Meta;

const Template: Story<IPopoverMenuProps> = (args) => (
  <PopoverMenu {...args} referenceNode={<FontAwesomeIcon icon={faEllipsisV} />} />
);

export const ListingPopoverMenu = Template.bind({});
ListingPopoverMenu.args = {
  referenceNode: <FontAwesomeIcon icon={faEllipsisV} />,
  items: [
    {
      itemKey: "pause",
      label: "Pause Listings",
      onClick: () => console.log("pause"),
    },
    {
      itemKey: "open",
      label: "Open Product Details",
      onClick: () => console.log("open"),
    },
    {
      itemKey: "cancel",
      label: "Cancel Orders",
      onClick: () => console.log("cancel"),
    },
    {
      itemKey: "return",
      label: "Return  Payment",
      onClick: () => console.log("return"),
    },
    {
      itemKey: "delete",
      label: "Delete Listing",
      onClick: () => console.log("delete"),
    },
  ],
  popperOptions: {
    placement: "bottom",
  },
} as IPopoverMenuProps;
