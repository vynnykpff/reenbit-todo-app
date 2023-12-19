import { ModalConstants } from "@/common/constants/ModalConstants.ts";
import { ModalActionTypes } from "@/common/types/Modal.ts";
import { ModalState } from "@/store/reducers/modalReducer.ts";

export const setModal = (modal: Partial<ModalState>): ModalActionTypes => ({
  type: ModalConstants.SET_MODAL,
  payload: modal as ModalState,
});
