import cn from "classnames";
import { FC, HTMLAttributes } from "react";

import styles from "./Input.module.scss";

type AdditionalInputProps = {
  value?: string;
  disabled?: boolean;
  type?: string;
};

type InputProps = HTMLAttributes<HTMLInputElement> & AdditionalInputProps;

export const Input: FC<InputProps> = ({ placeholder, className, value = "", disabled = false, type = "text", ...props }) => {
  return (
    <input {...props} type={type} value={value} disabled={disabled} className={cn(styles.input, className)} placeholder={placeholder} />
  );
};
