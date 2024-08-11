import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./config/route-config.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <Suspense fallback={<div>Loading</div>}>
  <RouterProvider router={router} />
  // </Suspense>
);
