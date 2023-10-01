import { NotificationConstants } from "@/common/constants/NotificationConstants.ts";
import { NotificationState } from "@/store/reducers/notificationReducer.ts";

type SetNotification = {
  type: NotificationConstants.SET_NOTIFICATION;
  payload: NotificationState;
};

type SetNotificationTitle = {
  type: NotificationConstants.SET_NOTIFICATION_TITLE;
  payload: NotificationState["title"];
};

export type NotificationActionTypes = SetNotification | SetNotificationTitle;
