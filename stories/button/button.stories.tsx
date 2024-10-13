// button.stories.tsx
import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import Button, { CustomButtonProps } from "../../src/components/button";
import styles from "./button.stories.module.css";

// Default export for Storybook
export default {
  title: "Atoms/Button",
  component: Button,
} as Meta;

// Template for creating button stories
const Template: StoryFn<CustomButtonProps> = (args) => <Button {...args} />;

// Story for the primary button
export const Primary = Template.bind({});
Primary.args = {
  styleType: "primary",
  children: "Primary Button",
  id: "primary-button",
  "data-testid": "test-button",
};

// Story for the secondary button
export const Secondary = Template.bind({});
Secondary.args = {
  styleType: "secondary",
  children: "Secondary Button",
};

// Story for the link button
export const Link = Template.bind({});
Link.args = {
  styleType: "link",
  children: "Link Button",
};

// Story for the disabled button
export const Disabled = Template.bind({});
Disabled.args = {
  styleType: "primary",
  disabled: true,
  children: "Disabled Button",
};

// Story demonstrating the className prop
export const CustomClassName = Template.bind({});
CustomClassName.args = {
  styleType: "primary",
  children: "Button with Custom Class",
  className: styles.myCustomClass,
};

// Story for inline style
export const InlineStyle = Template.bind({});
InlineStyle.args = {
  styleType: "primary",
  children: "Button with inline style",
  style: { width: "200px", backgroundColor: "green" },
};
