import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";

import { router } from "./route/Routes";
import { TimeLineProvider } from "./context/TimeLineProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TimeLineProvider>
      <RouterProvider router={router} />
    </TimeLineProvider>
  </StrictMode>,
);
