import { Story, Meta } from "@storybook/react/types-6-0";
import { ISellerHeaderProps, SellerHeader } from "../src/components/shared/SellerHeader";
export default {
  title: "SellerHeader",
  component: SellerHeader,
} as Meta;

const Template: Story<ISellerHeaderProps> = (args) => <SellerHeader {...args} />;

export const DefaultSellerHeader = Template.bind({});
