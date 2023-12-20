import { useAppSelector } from "@/hooks/useAppSelector.ts";
import { useAppDispatch } from "@/hooks/useAppDispatch.ts";
import { setModal } from "@/store/actions/modalActionCreators.ts";
import { ModalState } from "@/store/reducers/modalReducer.ts";

type SetState<T extends keyof ModalState> = (visible: boolean, props?: ModalState[T]["props"]) => void;

export const useModalState = <T extends keyof ModalState>(key: T): [boolean, SetState<T>] => {
  const modalState = useAppSelector(state => state.modalReducer);
  const dispatch = useAppDispatch();

  const setState = (visible: boolean, props?: ModalState[T]["props"]) => {
    dispatch(setModal({ [key]: { visible, props: props ?? {} } }));
  };

  return [modalState[key].visible, setState];
};
