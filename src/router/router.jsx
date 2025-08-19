import { createBrowserRouter } from "react-router";
import ThemePage from "../features/theme/page/ThemePage";
import Layout from "../layout";

const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ThemePage />,
      }
    ],
  }
]);
export default router;