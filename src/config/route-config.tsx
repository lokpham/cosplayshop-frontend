import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import { lazy } from "react";
import ErrorPage from "../pages/ErrorPage";
const Home = lazy(() => import("../pages/Home"));
const News = lazy(() => import("../pages/News"));
const CosplayerPage = lazy(() => import("../pages/CosplayerPage"));
const ProductDetailPage = lazy(() => {
  return import("../pages/ProductDetailPage");
});
export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: (
      <DefaultLayout>
        <ErrorPage />
      </DefaultLayout>
    ),
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
      {
        path: "/product/detail/:id",
        element: <ProductDetailPage />,
      },
    ],
  },
]);
