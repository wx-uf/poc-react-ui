import { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";
import RadioGroup, {
  CustomRadioGroupProps,
} from "../../src/components/radio-group";
import styles from "./radio-group.stories.module.css";

export default {
  title: "Form/RadioGroup",
  component: RadioGroup,
} as Meta;

const Template: StoryFn<CustomRadioGroupProps> = (args) => {
  const [selectedValue, setSelectedValue] = useState(args.selectedValue || "");
  console.log("Storybook args:", args); // Log the args to verify
  return (
    <RadioGroup
      {...args}
      selectedValue={selectedValue}
      onValueChange={setSelectedValue}
    />
  );
};

// Default case
export const Default = Template.bind({});
Default.args = {
  options: [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ],
  selectedValue: "option1",
};

// Required case
export const Required = Template.bind({});
Required.args = {
  options: [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ],
  required: false,
};

// Disabled case
export const Disabled = Template.bind({});
Disabled.args = {
  options: [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ],
  disabled: true,
};

// Custom Class Case
export const CustomClass = Template.bind({});
CustomClass.args = {
  options: [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ],
  className: styles["my-custom-class"],
};
