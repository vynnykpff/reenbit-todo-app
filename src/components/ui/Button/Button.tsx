import { ButtonType } from "@/common/constants/UIConstants.ts";
import { FC, HTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Button.module.scss";

type AdditionalButtonProps = {
  type?: ButtonType.BUTTON | ButtonType.SUBMIT;
  disabled?: boolean;
};

type ButtonProps = HTMLAttributes<HTMLButtonElement> & AdditionalButtonProps;

export const Button: FC<ButtonProps> = ({ children, className, type, disabled, ...props }) => {
  return (
    <button type={type} disabled={disabled} {...props} className={cn(styles.button, className)}>
      {children}
    </button>
  );
};