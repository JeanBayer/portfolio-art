import React, { Component } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NavBar } from "./NavBar";

export default {
  title: "NavBar/NavBar",
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => (
  <NavBar />
);

export const Default = Template.bind({});