import { EditTodoModal } from "@/components/TodoLayout/EditTodoModal/EditTodoModal.tsx";
import { FC } from "react";
import { useAppSelector } from "@/hooks/useAppSelector.ts";
import { ModalState } from "@/store/reducers/modalReducer.ts";
import { CreateTodoModal } from "@/components/TodoLayout/CreateTodoModal/CreateTodoModal.tsx";

export const components: Record<keyof ModalState, FC<any>> = {
  createTodoModal: CreateTodoModal,
  editTodoModal: EditTodoModal,
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
