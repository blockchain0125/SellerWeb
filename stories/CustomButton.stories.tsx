import { Meta, Story } from "@storybook/react/types-6-0";
import { CustomButton, ICustomButtonProps } from "../src/components/shared/CustomButton";
import { LocationIcon } from "../src/components/shared/Icons";
import { IWizardButtonProps, WizardButton, WizardButtonType } from "../src/components/shared/WizardButton";

export default {
  title: "Custom Button",
} as Meta;

const Template: Story<ICustomButtonProps> = (args) => <CustomButton {...args}>CLICK ME</CustomButton>;

export const SimpleButton = Template.bind({});
SimpleButton.args = {
  fullSize: false,
  rounded: true,
  primary: true,
  disabled: false,
  label: "CLICK ME",
};

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
  fullSize: false,
  rounded: true,
  primary: true,
  disabled: false,
  iconLeft: true,
  label: "BUTTON WITH ICON",
  icon: <LocationIcon width={14} height={14} fill="#fff" />,
};

export const ButtonWithRightIcon = Template.bind({});
ButtonWithRightIcon.args = {
  fullSize: false,
  rounded: true,
  primary: true,
  disabled: false,
  label: "RIGHT ICON",
  icon: <LocationIcon width={14} height={14} fill="#fff" />,
};

export const OnlyIconButton = Template.bind({});
OnlyIconButton.args = {
  fullSize: false,
  rounded: true,
  primary: true,
  disabled: false,
  icon: <LocationIcon width={14} height={14} fill="#fff" />,
};

const WizardButtonTemplate: Story<IWizardButtonProps> = (args) => <WizardButton {...args} />;
export const NextButton = WizardButtonTemplate.bind({});
NextButton.args = {
  buttonType: WizardButtonType.Next,
} as IWizardButtonProps;

export const BackButton = WizardButtonTemplate.bind({});
BackButton.args = {
  buttonType: WizardButtonType.Back,
} as IWizardButtonProps;
