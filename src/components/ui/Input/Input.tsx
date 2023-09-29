import styles from "./Input.module.scss";
import { FC, HTMLAttributes } from "react";

type AdditionalInputProps = {
  value?: string;
  disabled?: boolean;
  type?: string;
};

type InputProps = HTMLAttributes<HTMLInputElement> & AdditionalInputProps;

export const Input: FC<InputProps> = ({ placeholder, className, value = "", disabled = false, type = "text", ...props }) => {
  return (
    <input {...props} type={type} value={value} disabled={disabled} className={`${styles.input} ${className}`} placeholder={placeholder} />
  );
};
