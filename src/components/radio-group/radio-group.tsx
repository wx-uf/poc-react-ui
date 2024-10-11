'use client';

import * as RadixRadioGroup from '@radix-ui/react-radio-group';
import classNames from 'classnames';
import React from 'react';
import styles from './radio-group.module.css';
import { CustomRadioGroupProps } from './type';

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
          data-state={selectedValue === option.value ? 'checked' : 'unchecked'}
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
