import { ConfirmModal } from "@/components/ConfirmModal/ConfirmModal.tsx";
import { TodoEditModal } from "@/components/TodoLayout/TodoEditModal/TodoEditModal.tsx";
import { FC } from "react";
import { useAppSelector } from "@/hooks/useAppSelector.ts";
import { ModalState } from "@/store/reducers/modalReducer.ts";
import { TodoCreateModal } from "@/components/TodoLayout/TodoCreateModal/TodoCreateModal.tsx";

export const components: Record<keyof ModalState, FC<any>> = {
  createTodoModal: TodoCreateModal,
  editTodoModal: TodoEditModal,
  confirmModal: ConfirmModal,
};

export const ModalComponents = () => {
  const modalState = useAppSelector(state => state.modalReducer);

  return (
    <>
      {Object.keys(modalState).map(i => {
        const key = i as keyof typeof modalState;
        if (!modalState[key].visible) {
          return null;
        }

        const Component = components[key];

        return <Component key={key} {...modalState[key].props} />;
      })}
    </>
  );
};
