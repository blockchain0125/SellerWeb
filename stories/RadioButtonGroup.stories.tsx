import { Story, Meta } from "@storybook/react/types-6-0";
import { useCallback, useState } from "react";
import { IRadioButtonGroupProps, RadioButtonGroup } from "../src/components/shared/RadioButtonGroup";
export default {
  title: "Form/Radio Button Group",
  component: RadioButtonGroup,
} as Meta;

const Template: Story<IRadioButtonGroupProps> = (args) => {
  const [value, setValue] = useState<string | undefined>(args.value);
  const onChange = useCallback((newValue) => {
    console.log(newValue);
    setValue(newValue);
  }, []);

  return <RadioButtonGroup {...args} value={value} onChange={onChange} />;
};

export const ColorRadioGroup = Template.bind({});
ColorRadioGroup.args = {
  name: "color",
  options: [
    {
      value: "red",
      label: "Red",
    },
    {
      value: "black",
      label: "Black",
    },
    {
      value: "green",
      label: "Green",
    },
  ],
  value: "red",
} as IRadioButtonGroupProps;
