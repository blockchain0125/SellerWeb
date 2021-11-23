import { Story, Meta } from "@storybook/react/types-6-0";
import { Checkbox, ICheckboxProps } from "../src/components/shared/Checkbox";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
} as Meta;

const Template: Story<ICheckboxProps> = (args) => <Checkbox {...args} />;

export const SimpleCheckbox = Template.bind({});
SimpleCheckbox.args = {
  label: "Buffer Policy",
} as ICheckboxProps;
