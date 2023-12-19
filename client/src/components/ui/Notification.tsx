import { useAppDispatch } from "@/hooks/useAppDispatch.ts";
import { useAppSelector } from "@/hooks/useAppSelector.ts";
import { setNotificationTitle } from "@/store/actions/notificationActionCreators.ts";
import { memo, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notification = () => {
  const { title, delay, type } = useAppSelector(state => state.notificationReducer);
  const dispatch = useAppDispatch();

  const notify = () =>
    toast[type](title, {
      onClose: () => {
        dispatch(setNotificationTitle(""));
      },
    });

  useEffect(() => {
    if (title) {
      notify();
    }
  }, [title]);

  return (
    <ToastContainer
      position="top-right"
      autoClose={delay}
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
  );
};

export default memo(Notification);
