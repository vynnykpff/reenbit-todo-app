import { NotificationConstants } from "@/common/constants/NotificationConstants.ts";
import { NotificationActionTypes } from "@/common/types/Notification.ts";
import { NotificationState } from "@/store/reducers/notificationReducer.ts";

export const setNotification = (data: Partial<NotificationState>): NotificationActionTypes => ({
  type: NotificationConstants.SET_NOTIFICATION,
  payload: data as NotificationState,
});

export const setNotificationTitle = (data: NotificationState["title"]): NotificationActionTypes => ({
  type: NotificationConstants.SET_NOTIFICATION_TITLE,
  payload: data,
});
