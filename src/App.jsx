import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Editor from "./pages/Editor";
import Landing from "./pages/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/editor",
    element: <Editor />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
