import cn from "classnames";
import { FC, HTMLAttributes } from "react";

import styles from "./Input.module.scss";

type AdditionalInputProps = {
  value?: string;
  disabled?: boolean;
  type?: string;
  checked?: boolean;
};

type InputProps = HTMLAttributes<HTMLInputElement> & AdditionalInputProps;

export const Input: FC<InputProps> = ({ placeholder, className, value = "", disabled = false, type = "text", checked, ...props }) => {
  return (
    <input
      {...props}
      type={type}
      value={value}
      checked={checked}
      disabled={disabled}
      className={cn(styles.input, className)}
      placeholder={placeholder}
    />
  );
};
