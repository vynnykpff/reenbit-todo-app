import { FC } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type NotificationType = "success" | "error" | "info" | "warning";

const ModalNotification: FC<{ title?: string; typeNotification?: NotificationType }> = ({ title = "", typeNotification = "error" }) => {
  const notify = () => toast[typeNotification](title);

  return (
    <div>
      <span style={{ display: "none" }}>{notify()}</span>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ color: "green" }}
        theme="dark"
      />
    </div>
  );
};

export default ModalNotification;
