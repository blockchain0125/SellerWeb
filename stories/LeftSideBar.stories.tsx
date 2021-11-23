import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { ILeftSidebarProps, LeftSidebar } from "../src/components/shared/LeftSidebar";

export default {
  title: "LeftSidebar",
  component: LeftSidebar,
} as Meta;

const Template: Story<ILeftSidebarProps> = (args) => <LeftSidebar {...args} />;

export const DefaultLeftSidebar = () => {
  return (
    <MemoryRouter>
      <LeftSidebar />
    </MemoryRouter>
  );
};
