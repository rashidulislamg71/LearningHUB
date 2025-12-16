import { createBrowserRouter } from "react-router-dom";
import HTMLPage from "../Pages/HTML/HTMLPage";
import HomePage from "../Pages/HomePage";
import OutLet from "../MainLayout/OutLet";
import CSSPage from "../Pages/CSS/CSSPage";
import NotFound from "../Pages/NotFound";

const router = createBrowserRouter([
  {
    element: <OutLet/>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/html",
        element: <HTMLPage />,
      },
      {
        path: "/css",
        element: <CSSPage />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
