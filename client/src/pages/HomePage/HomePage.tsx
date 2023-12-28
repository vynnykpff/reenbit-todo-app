import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/hooks/useAppSelector.ts";
import { getTodosThunk } from "@/store/thunks/todosThunks.ts";
import { useAppDispatch } from "@/hooks/useAppDispatch.ts";
import { Header } from "@/components/Header/Header.tsx";
import { TodoLayout } from "@/components/TodoLayout/TodoLayout.tsx";
import { Routes } from "@/common/constants/Routes.ts";

const HomePage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.authReducer);
  const token = localStorage.getItem("access-token");

  useEffect(() => {
    if (!token) {
      navigate(Routes.LOGIN);
      return;
    }

    void dispatch(getTodosThunk({ token, userId: user?._id! }));
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
