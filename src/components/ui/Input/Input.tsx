import styles from "./Input.module.scss";
import { FC, HTMLAttributes } from "react";

type InputProps = HTMLAttributes<HTMLInputElement>;

export const Input: FC<InputProps> = ({ placeholder, className, ...props }) => {
  return <input {...props} className={`${styles.input} ${className}`} placeholder={placeholder} />;
};
