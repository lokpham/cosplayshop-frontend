import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Home from "../pages/Home";
import News from "../pages/News";
import CosplayerPage from "../pages/CosplayerPage";

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
