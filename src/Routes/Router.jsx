import { createBrowserRouter } from "react-router-dom";
import HTMLPage from "../Pages/HTML/HTMLPage";
import HomePage from "../Pages/HomePage";
import OutLet from "../MainLayout/OutLet";
import CSSPage from "../Pages/CSS/CSSPage";
import NotFound from "../Pages/NotFound";
import JavaPage from "../Pages/Java/JavaPage";
import TailwindCSSPage from "../Pages/TailwindCSS/TailwindCSSPage";
import Bootstrap5Page from "../Pages/Bootstrap/Bootstrap5Page";
import JavaScriptPage from "../Pages/JavaScript/JavaScriptPage";
import PythonPage from "../Pages/Python/PythonPage";
import DataStructure from "../Pages/DataStructure/DataStructure";
import OthereActivity from "../Pages/OthereActivity/OthereActivity";

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
        path: "/tailwindcss",
        element: <TailwindCSSPage />,
      },
      {
        path: "/bootstrap",
        element: <Bootstrap5Page />,
      },
      {
        path: "/javascript",
        element: <JavaScriptPage />,
      },
      {
        path: "/java",
        element: <JavaPage />,
      },
     
      {
        path: "/python",
        element: <PythonPage />,
      },
   
      {
        path: "/datastructure",
        element: <DataStructure />,
      },
      {
        path: "/others",
        element: <OthereActivity />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
