import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./layout/RootLayout";
import HomePage from "./pages/HomePage";
import TimelinePage from "./pages/TimelinePage";
import StatsPage from "./pages/StatsPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/timeline",
        element: <TimelinePage />,
      },
      {
        path: "/stats",
        element: <StatsPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
