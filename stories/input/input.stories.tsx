import React, { useState } from "react";
import { Input, CustomInputProps } from "../../src/components/input"; // Adjust the path as necessary
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Form/Input",
  component: Input,
} as Meta;

const Template: StoryFn<CustomInputProps> = (args) => {
  const [inputValue, setInputValue] = useState(args.value || "");

  return (
    <Input
      {...args}
      value={inputValue} // Controlled input
      onChange={(e) => setInputValue(e.target.value)}
      style={{ width: "300px" }}
    />
  );
};
export const Default = Template.bind({});
Default.args = {
  label: "Input Label",
  htmlFor: "input-id",
  onChange: (e) => console.log(e.target.value),
  styleType: "bordered",
  placeholder: "place holder text",
};

export const WithSuffixLabel = Template.bind({});
WithSuffixLabel.args = {
  label: "Input Label",
  htmlFor: "input-id",
  styleType: "bordered",
  suffixLabel: "km/hour",
  placeholder: "100",
};

export const WithErrorMessage = Template.bind({});
WithErrorMessage.args = {
  label: "Input with Error",
  htmlFor: "input-error-id",
  error: true,
  styleType: "bordered",
  errorMessage: "This is an error message.",
};

export const WithoutBorder = Template.bind({});
WithoutBorder.args = {
  label: "Input without Border",
  htmlFor: "input-no-border-id",
  styleType: "no-border",
  placeholder: "place holder text",
};

export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  label: "Input with Right Icon",
  htmlFor: "input-icon-id",
  rightIcon: <span>🔍</span>,
};

export const ClearableInput = Template.bind({});
ClearableInput.args = {
  label: "Clearable Input",
  htmlFor: "input-clear-id",
  styleType: "bordered",
  onClear: () => console.log("Cleared"),
};
