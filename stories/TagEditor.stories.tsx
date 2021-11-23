import { Story, Meta } from "@storybook/react/types-6-0";
import { useCallback, useState } from "react";
import { ITagEditorProps, TagEditor } from "../src/components/shared/TagEditor";

export default {
  title: "Tag Editor",
  component: TagEditor,
} as Meta;

const Template: Story<ITagEditorProps> = (args) => {
  const [tags, setTags] = useState<string[]>(args.value as string[]);
  const onChange = useCallback((newTags) => {
    setTags(newTags);
  }, []);

  return <TagEditor {...args} onChange={onChange} value={tags} />;
};

export const BasicTagEditor = Template.bind({});
BasicTagEditor.args = {
  label: "Keywords",
  value: ["Gaming mouse", "E-Blue"],
} as ITagEditorProps;
