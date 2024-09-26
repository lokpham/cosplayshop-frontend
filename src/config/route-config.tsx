import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import { lazy, Suspense } from "react";
import ErrorPage from "../pages/ErrorPage";
import LoadingPage from "../components/LoadingPage";
import Login from "../pages/Login";
const Home = lazy(() => import("../pages/Home"));
const News = lazy(() => import("../pages/News"));
const CosplayerPage = lazy(() => import("../pages/CosplayerPage"));

const ProductDetailPage = lazy(() => {
  return import("../pages/ProductDetailPage");
});
const CartDetailList = lazy(() => {
  return import("../pages/CartDetailList");
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
        element: (
          <Suspense fallback={<LoadingPage />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/category/:id",
        element: <div>asdad</div>,
      },

      {
        path: "/news",
        element: (
          <Suspense fallback={<LoadingPage />}>
            <News />
          </Suspense>
        ),
      },
      {
        path: "/cosplayer",
        element: (
          <Suspense fallback={<LoadingPage />}>
            <CosplayerPage />
          </Suspense>
        ),
      },
      {
        path: "/product/detail/:id",
        element: (
          <Suspense fallback={<LoadingPage />}>
            <ProductDetailPage />
          </Suspense>
        ),
      },
      {
        path: "/cart/list",
        element: (
          <Suspense fallback={<LoadingPage />}>
            <CartDetailList />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Login />
      </Suspense>
    ),
  },
]);
