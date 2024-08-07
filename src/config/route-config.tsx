import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import { lazy } from "react";
const Home = lazy(() => import("../pages/Home"));
const News = lazy(() => import("../pages/News"));
const CosplayerPage = lazy(() => import("../pages/CosplayerPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/catetory",
        element: <div>asdad</div>,
      },

      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/cosplayer",
        element: <CosplayerPage />,
      },
    ],
  },
]);
