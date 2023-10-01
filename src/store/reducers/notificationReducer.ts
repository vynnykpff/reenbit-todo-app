import { NotificationConstants, NotificationType } from "@/common/constants/NotificationConstants.ts";
import { NotificationActionTypes } from "@/common/types/Notification.ts";

export type NotificationState = {
  title: string;
  delay: number;
  type: NotificationType;
};

const initialState: NotificationState = {
  title: "",
  delay: 2000,
  type: NotificationType.INFO,
};

export const notificationReducer = (state = initialState, action: NotificationActionTypes) => {
  switch (action.type) {
    case NotificationConstants.SET_NOTIFICATION:
      return {
        ...state,
        ...action.payload,
      };
    case NotificationConstants.SET_NOTIFICATION_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    default:
      return state;
  }
};
