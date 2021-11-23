import { Story, Meta } from "@storybook/react/types-6-0";
import { ITagProps, Tag } from "../src/components/shared/Tag";
export default {
  title: "Tag",
  component: Tag,
} as Meta;

const Template: Story<ITagProps> = (args) => <Tag {...args} />;

export const TagExample = Template.bind({});

TagExample.args = {
  label: "Gaming Mouse",
  customData: "gaming mouse",
  onRemove: console.log,
} as ITagProps;
