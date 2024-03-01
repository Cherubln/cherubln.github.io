import NotFound from "./components/NotFound";
import SingleProject from "./pages/Projects/SingleProject";
import Root from "./pages/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
  },
  {
    path: "/projects/:projectName",
    element: <SingleProject />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
