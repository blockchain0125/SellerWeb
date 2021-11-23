import { Meta, Story } from "@storybook/react/types-6-0";
import tw from "twin.macro";
import { TextArea, ITextAreaProps } from "../src/components/shared/TextArea";

export default {
  title: "Form/Textarea",
  component: TextArea,
} as Meta;

const Template: Story<ITextAreaProps> = (args) => <TextArea {...args} />;

export const DefaultTextarea = Template.bind({});
DefaultTextarea.args = {
  placeholder: "placeholder",
  textareaStyle: tw`h-20`,
} as ITextAreaProps;
