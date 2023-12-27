import { TailSpin } from "react-loader-spinner";
import styles from "./Loader.module.scss";

export const Loader = () => {
  return (
    <TailSpin
      height="70"
      width="70"
      color="var(--text-accent-500)"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass={styles.loaderContainer}
      visible
    />
  );
};
