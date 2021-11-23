import { Story, Meta } from "@storybook/react/types-6-0";
import { IWizardProps, Wizard, WizardStep } from "../src/components/shared/Wizard";

export default {
  title: "Wizard",
  component: Wizard,
} as Meta;

const Template: Story<IWizardProps> = (args) => (
  <div className="w-full h-screen border border-primary">
    <Wizard {...args} />
  </div>
);

const steps: WizardStep[] = [
  {
    name: "Store",
    content: (
      <ol className="list-decimal">
        <li>Store</li>
        <li>Store</li>
        <li>Store</li>
        <li>Store</li>
        <li>Store</li>
        <li>Store</li>
        <li>Store</li>
        <li>Store</li>
        <li>Store</li>
        <li>Store</li>
        <li>Store</li>
        <li>Store</li>
        <li>Store</li>
        <li>Store</li>
        <li>Store</li>
        <li>Store</li>
        <li>Store</li>
        <li>Store</li>
        <li>Store</li>
        <li>Store</li>
        <li>Store</li>
      </ol>
    ),
    sideBar: <div className="bg-background w-30 border border-grey10 h-full">Store sidebar</div>,
  },
  {
    name: "Product",
    content: "Product",
  },
  {
    name: "Offer",
    content: "Offer",
  },
  {
    name: "Delivery",
    content: "Delivery",
  },
];

export const BasicWizard = Template.bind({});
BasicWizard.args = {
  steps,
  wizardName: "New Listings",
  customButton: <div className="text-primary">Close</div>,
  onFinish: () => alert("finish wizard"),
};

export const VerticalWizard = Template.bind({});
VerticalWizard.args = {
  steps,
  onFinish: () => alert("finish wizard"),
  vertical: true,
};
