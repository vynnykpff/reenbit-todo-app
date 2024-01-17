import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/hooks/useAppSelector.ts";
import { getFilteredTodosThunk } from "@/store/thunks/todosThunks.ts";
import { useAppDispatch } from "@/hooks/useAppDispatch.ts";
import { Header } from "@/components/Header/Header.tsx";
import { TodoLayout } from "@/components/TodoLayout/TodoLayout.tsx";
import { Routes } from "@/common/constants/Routes.ts";

const HomePage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { filterValue } = useAppSelector(state => state.todoReducer);
  const token = localStorage.getItem("access-token") ?? "";

  const handleGetTodos = async () => {
    void dispatch(getFilteredTodosThunk({ filter: filterValue }));
  };

  useEffect(() => {
    if (!token) {
      navigate(Routes.LOGIN);
      return;
    }

    void handleGetTodos();
  }, []);

  if (!token) {
    return null;
  }

  return (
    <>
      <Header />
      <TodoLayout />
    </>
  );
};

export default HomePage;
