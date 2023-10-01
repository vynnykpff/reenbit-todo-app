import { FC, HTMLAttributes } from "react";

import cn from "classnames";

import styles from "./Button.module.scss";

type ButtonProps = HTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button {...props} className={cn(styles.button, className)}>
      {children}
    </button>
  );
};
