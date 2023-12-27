import { FC, Suspense, lazy } from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { Loader } from "@/components/ui/Loader/Loader.tsx";
import { Routes } from "@/common/constants/Routes.ts";

const HomePage = lazy(() => import("@/pages/HomePage/HomePage.tsx"));
const LoginPage = lazy(() => import("@/pages/LoginPage/LoginPage.tsx"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage/NotFoundPage.tsx"));

const router = createHashRouter([
  {
    path: Routes.HOME,
    element: <HomePage />,
  },
  {
    path: Routes.LOGIN,
    element: <LoginPage />,
  },
  {
    path: Routes.ALL,
    element: <NotFoundPage />,
  },
]);

export const Routing: FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
