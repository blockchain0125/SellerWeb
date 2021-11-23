import { Story, Meta } from "@storybook/react/types-6-0";
import { IProgressBarProps, ProgressBar } from "../src/components/shared/ProgressBar";
export default {
  title: "Progress bar",
  component: ProgressBar,
} as Meta;

const Template: Story<IProgressBarProps> = (args) => (
  <div className="bg-background">
    <ProgressBar {...args} />
  </div>
);

export const DefaultProgressBar = Template.bind({});
DefaultProgressBar.args = { percentage: 30 } as IProgressBarProps;
