import * as RadixLabel from "@radix-ui/react-label";
import classNames from "classnames";
import styles from "./label.module.css";
import { CustomLabelProps } from "./type";

const Label: React.FC<CustomLabelProps> = ({
  label,
  subLabel,
  htmlFor,
  className,
  ...otherProps
}) => {
  return (
    <div
      className={classNames(styles.labelContainer, className)}
      id={otherProps.id}
      data-testid={otherProps["data-testid"]}
      style={otherProps.style}
    >
      <RadixLabel.Root htmlFor={htmlFor} className={styles.label}>
        {label}
      </RadixLabel.Root>
      {subLabel && <span className={styles.subLabel}>{subLabel}</span>}
    </div>
  );
};

export default Label;
