import classNames from "classnames";
import React from "react";
import styles from "./button.module.css";
import { CustomButtonProps } from "./type";

const Button = ({
  styleType = "primary",
  disabled = false,
  onClick,
  className = "",
  children,
  ...otherProps
}: CustomButtonProps) => {
  // Use classNames to conditionally apply classes
  const buttonClass = classNames(styles.button, {
    [styles.primary]: styleType === "primary",
    [styles.secondary]: styleType === "secondary",
    [styles.link]: styleType === "link",
    [styles.disabled]: disabled,
    [className]: className,
  });

  return (
    <button
      className={buttonClass}
      disabled={disabled}
      onClick={onClick}
      id={otherProps.id}
      data-testid={otherProps["data-testid"]}
      style={otherProps.style}
    >
      {children}
    </button>
  );
};

export default Button;
