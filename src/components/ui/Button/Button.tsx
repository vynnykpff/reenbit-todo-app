import styles from "./Button.module.scss";
import { FC, HTMLAttributes } from "react";

type ButtonProps = HTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button {...props} className={`${styles.button} ${className}`}>
      {children}
    </button>
  );
};
