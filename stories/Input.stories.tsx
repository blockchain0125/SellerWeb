import { Meta, Story } from "@storybook/react/types-6-0";
import { useCallback, useState } from "react";
import tw from "twin.macro";
import { FieldStatus } from "../src/components/shared/Field";
import { Input, IInputProps } from "../src/components/shared/Input";

export default {
  title: "Input",
  component: Input,
} as Meta;

const Template: Story<IInputProps> = (args) => <Input {...args} />;

export const BasicInput = Template.bind({});
BasicInput.args = {
  placeholder: "Placeholder",
  message: "message",
};

export const SuccessInput = Template.bind({});
SuccessInput.args = {
  placeholder: "Placeholder",
  message: "message",
  status: FieldStatus.Success,
};

export const ErrorInput = Template.bind({});
ErrorInput.args = {
  placeholder: "Placeholder",
  message: "message",
  status: FieldStatus.Error,
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  type: "password",
};

export const OverrideStyle = () => {
  const inputStyle1 = { input: { height: "1rem" } };
  const inputStyle2 = { input: tw`h-8` };
  return (
    <>
      <Input placeholder="placeholder" styles={inputStyle1} />
      <Input placeholder="placeholder" styles={inputStyle2} />
    </>
  );
};

export const ControllerInput = () => {
  const [value, setValue] = useState("initial value");
  const onChange = useCallback((newValue) => {
    setValue(newValue);
    console.log(newValue);
  }, []);
  return <Input value={value} onChange={onChange} />;
};

export const InputWithLabel = Template.bind({});
InputWithLabel.args = {
  label: "label",
  placeholder: "placeholder",
} as IInputProps;
