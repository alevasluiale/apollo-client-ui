import Register from "../authentication/components/Register";
import App from "../App";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "sign-up",
        element: <Register />,
      },
    ],
  },
]);

export default router;
