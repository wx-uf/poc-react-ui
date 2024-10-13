import classNames from "classnames";
import React, { ChangeEvent } from "react";
import Label from "../label"; // Use absolute path
import styles from "./input.module.css";
import { CustomInputProps } from "./type";

const Input: React.FC<CustomInputProps> = ({
  label,
  htmlFor,
  type = "text",
  value,
  onChange,
  className,
  rightIcon,
  error,
  styleType = "bordered",
  onClear,
  errorMessage,
  suffixLabel,
  style,
  placeholder,
  ...otherProps
}) => {
  const handleClear = () => {
    if (onClear) {
      onClear(); // Call the onClear callback
    }

    if (onChange) {
      onChange({ target: { value: "" } } as ChangeEvent<HTMLInputElement>); // Clear input value
    }
  };

  return (
    <div
      className={classNames(styles.inputContainer, className)}
      style={style}
      id={otherProps.id}
      data-testid={otherProps["data-testid"]}
    >
      {label && (
        <Label htmlFor={htmlFor} className={styles.label} label={label} />
      )}

      <div className={styles.inputWrapper}>
        <input
          id={htmlFor}
          type={type}
          value={value} // Use the value prop
          onChange={onChange}
          placeholder={placeholder}
          className={classNames(styles.input, {
            [styles.error]: error,
            [styles.noBorder]: styleType === "no-border",
            [styles.bordered]: styleType === "bordered",
          })}
          aria-invalid={error}
          aria-describedby={error ? `${htmlFor}-error` : undefined} // Associate error message
        />
        {rightIcon && <span className={styles.icon}>{rightIcon}</span>}

        {onClear && value && (
          <button
            type="button"
            className={styles.clearButton}
            onClick={handleClear}
            aria-label="Clear input"
          >
            &times; {/* Cross icon */}
          </button>
        )}

        {suffixLabel && (
          <span className={styles.suffixLabel}>{suffixLabel}</span>
        )}
      </div>
      {error && (
        <div>
          <div
            id={`${htmlFor}-error`}
            className={styles.errorMessage}
            role="alert"
          >
            {errorMessage}
          </div>
        </div>
      )}
    </div>
  );
};

export default Input;
