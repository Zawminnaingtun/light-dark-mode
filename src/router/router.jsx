import { createBrowserRouter } from "react-router";
import ThemePage from "../features/theme/page/ThemePage";
import Layout from "../layout";
import HomePage from "../features/home/page/HomePage";
import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([

  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      }
    ],
  }
]);
export default router;