import { FC, HTMLAttributes } from "react";

import cn from "classnames";

import styles from "./Button.module.scss";

type AdditionalButtonProps = {
  type?: "button" | "submit";
};

type ButtonProps = HTMLAttributes<HTMLButtonElement> & AdditionalButtonProps;

export const Button: FC<ButtonProps> = ({ children, className, type, ...props }) => {
  return (
    <button type={type} {...props} className={cn(styles.button, className)}>
      {children}
    </button>
  );
};
