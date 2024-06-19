import "./App.css";
import Accordian from "./pages/Accordian";
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
  {
    path: "/accordian",
    element: <Accordian />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
