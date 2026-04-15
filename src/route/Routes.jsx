import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages/HomePage";
import TimelinePage from "../pages/TimelinePage";
import StatsPage from "../pages/StatsPage";
import FriendsDetailsPage from "../pages/FriendsDetailsPage";
import NotFoundPage from "../pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    Component: RootLayout,
    loader: async () => {
      const res = await fetch("/freinds.json");
      return res.json();
    },
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
      {
        path: "/friend/:id",
        element: <FriendsDetailsPage />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);
