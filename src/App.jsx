import "./App.css";
import Cryptocurrency from "./pages/Cryptocurrency";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/:coin",
    element: <Cryptocurrency />,
  },
  {
    path: "/",
    element: <Cryptocurrency />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
