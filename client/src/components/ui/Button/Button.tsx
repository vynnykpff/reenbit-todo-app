import { FC, HTMLAttributes } from "react";
import cn from "classnames";
import { ButtonType } from "@/common/constants/UIConstants.ts";
import styles from "./Button.module.scss";

type ButtonAdditionalProps = {
  type?: ButtonType.BUTTON | ButtonType.SUBMIT;
  disabled?: boolean;
};

type ButtonProps = HTMLAttributes<HTMLButtonElement> & ButtonAdditionalProps;

export const Button: FC<ButtonProps> = ({ children, className, type = ButtonType.BUTTON, disabled, ...props }) => {
  return (
    <button type={type} disabled={disabled} {...props} className={cn(styles.button, className)}>
      {children}
    </button>
  );
};
