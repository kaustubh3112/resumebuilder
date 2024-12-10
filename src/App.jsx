import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./component/layout";
import Login from "./pages/login";
import Home from "./pages/home";
import PrivateRoute from "./component/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/home",
          element: (
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
