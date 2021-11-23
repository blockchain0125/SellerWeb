import { faCalendarDay, faCalendarWeek } from "@fortawesome/free-solid-svg-icons";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ISelectProps, Select, ISelectOption } from "../src/components/shared/Select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default {
  title: "Form/Select",
  component: Select,
} as Meta;

const options: ISelectOption[] = [
  {
    value: "7d",
    display: (
      <div>
        <FontAwesomeIcon icon={faCalendarDay} /> 7 days
      </div>
    ),
  },
  {
    value: "2w",
    display: (
      <div>
        <FontAwesomeIcon icon={faCalendarWeek} /> 2 weeks
      </div>
    ),
  },
];

const Template: Story<ISelectProps> = (args) => <Select {...args} />;

export const SingleSelect = Template.bind({});
SingleSelect.args = {
  multiSelect: false,
  options: options,
} as ISelectProps;

export const MultipleSelect = Template.bind({});
MultipleSelect.args = {
  multiSelect: true,
  options: options,
} as ISelectProps;
