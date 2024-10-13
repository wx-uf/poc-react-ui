import * as Dialog from "@radix-ui/react-dialog";
import classNames from "classnames";
import React from "react";
import styles from "./modal.module.css";
import { CustomModalProps } from "./type";

const Modal: React.FC<CustomModalProps> = ({
  open,
  onOpenChange,
  title,
  children,
  footer,
  className,
  ...otherProps
}) => {
  return (
    <Dialog.Root
      open={open}
      onOpenChange={onOpenChange}
      data-state={open ? "open" : "closed"}
    >
      <Dialog.Overlay className={styles.overlay} />
      <Dialog.Content
        className={classNames(styles.content, className)}
        {...otherProps}
      >
        <Dialog.Title className={styles.title}>{title}</Dialog.Title>
        <Dialog.Description className={styles.description}>
          {children}
        </Dialog.Description>
        <div className={styles.footer}>{footer}</div>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default Modal;
