import { Meta, Story } from "@storybook/react/types-6-0";
import { IRadioButtonProps, RadioButton } from "../src/components/shared/RadioButton";

export default {
  title: "Form/Radio button",
  component: RadioButton,
} as Meta;

const Template: Story<IRadioButtonProps> = (args) => {
  return <RadioButton {...args} />;
};

export const DefaultRadioButton = Template.bind({});
DefaultRadioButton.args = {
  label: "Label",
  value: "red",
  checked: false,
} as IRadioButtonProps;
