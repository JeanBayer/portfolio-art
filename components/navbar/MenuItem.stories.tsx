import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MenuItem } from "./MenuItem";
import about from "../../public/about.png";

export default {
  title: "NavBar/MenuItem",
  component: MenuItem,
  argTypes: {
    logo: { control: "text" },
    title: { control: "text" },
    link: { control: "text" },
  },
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => (
  <MenuItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  logo: about,
  title: "Title",
  link: "/",
};
