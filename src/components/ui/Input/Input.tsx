import styles from "./Input.module.scss";
import { FC, HTMLAttributes } from "react";

type AdditionalInputProps = {
  value: string;
};

type InputProps = HTMLAttributes<HTMLInputElement> & AdditionalInputProps;

export const Input: FC<InputProps> = ({ placeholder, className, value, ...props }) => {
  return <input {...props} value={value} className={`${styles.input} ${className}`} placeholder={placeholder} />;
};
