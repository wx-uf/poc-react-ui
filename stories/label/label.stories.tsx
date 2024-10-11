import { Label, CustomLabelProps } from "../../src/components/label";
import { StoryFn, Meta } from "@storybook/react";

export default {
  title: "Form/Label",
  component: Label,
} as Meta;

const Template: StoryFn<CustomLabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Username",
  htmlFor: "username-input",
};

export const SubLabelAsString = Template.bind({});
SubLabelAsString.args = {
  label: "Email",
  subLabel: "We’ll never share your email.",
  htmlFor: "email-input",
};

export const SubLabelAsReactNode = Template.bind({});
SubLabelAsReactNode.args = {
  label: "Terms and Conditions",
  subLabel: <a href="https://www.ufinity.com/">Read here</a>,
  htmlFor: "terms-checkbox",
};
