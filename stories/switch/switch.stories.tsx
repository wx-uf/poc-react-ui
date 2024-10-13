// Switch.stories.tsx
import { useState } from "react";

import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import Switch, { CustomSwitchProps } from "../../src/components/switch";

export default {
  title: "Atoms/Switch",
  component: Switch,
} as Meta;

const Template: StoryFn<CustomSwitchProps> = (args) => {
  const [checked, setChecked] = useState(args.checked);

  const handleCheckedChange = (state: boolean) => {
    setChecked(state);
  };

  return (
    <Switch {...args} checked={checked} onCheckedChange={handleCheckedChange} />
  );
};

// Default story
export const Default = Template.bind({});
Default.args = {
  label: "Toggle Switch",
  labelPosition: "left",
  checked: false,
};

// Checked state story
export const Checked = Template.bind({});
Checked.args = {
  label: "Checked Switch",
  labelPosition: "left",
  checked: true,
};

// Disabled state story
export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled Switch",
  labelPosition: "left",
  checked: false,
  disabled: true,
};

// Label on the right
export const LabelOnRight = Template.bind({});
LabelOnRight.args = {
  label: "Toggle Switch",
  labelPosition: "right",
  checked: false,
};
