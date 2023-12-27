import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/hooks/useAppDispatch.ts";
import { checkOnValidTokenThunk } from "@/store/thunks/authThunks.ts";
import { Header } from "@/components/Header/Header.tsx";
import { TodoLayout } from "@/components/TodoLayout/TodoLayout.tsx";
import { Routes } from "@/common/constants/Routes.ts";

const HomePage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("access-token");

  useEffect(() => {
    if (!token) {
      navigate(Routes.LOGIN);
      return;
    }

    void dispatch(checkOnValidTokenThunk(token));
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
