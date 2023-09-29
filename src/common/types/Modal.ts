import { ModalConstants } from "@/common/constants/ModalConstants.ts";
import { ModalState } from "@/store/reducers/modalReducer.ts";

type SetModal = {
  type: typeof ModalConstants.SET_MODAL;
  payload: ModalState;
};

export type ModalActionTypes = SetModal;
