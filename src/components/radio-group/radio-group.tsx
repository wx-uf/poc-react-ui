import * as RadixRadioGroup from "@radix-ui/react-radio-group";
import { RadioGroupProps } from "@radix-ui/react-radio-group";
import classNames from "classnames";
import React from "react";
import styles from "./radio-group.module.css";

interface CustomRadioGroupProps extends RadioGroupProps {
  options: { value: string; label: string }[];
  selectedValue: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  style?: React.CSSProperties | undefined;
  id?: string | undefined;
  "data-testid"?: string | undefined;
}

const RadioGroup: React.FC<CustomRadioGroupProps> = ({
  options,
  selectedValue,
  onValueChange,
  className,
  disabled,
  required,
  ...otherProps
}) => {
  return (
    <RadixRadioGroup.Root
      value={selectedValue}
      onValueChange={onValueChange}
      className={classNames(styles.radioGroup, className)}
      required={required}
      disabled={disabled}
      {...otherProps}
    >
      {options.map((option) => (
        <RadixRadioGroup.Item
          key={option.value}
          value={option.value}
          id={option.value}
          disabled={disabled}
          required={required}
          className={styles.radioItem}
          data-state={selectedValue === option.value ? "checked" : "unchecked"}
          data-disabled={disabled ? true : undefined}
        >
          <span className={styles.radioIndicator} />
          {option.label}
        </RadixRadioGroup.Item>
      ))}
    </RadixRadioGroup.Root>
  );
};

export default RadioGroup;
