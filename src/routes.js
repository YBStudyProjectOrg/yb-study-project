import Login from "./pages/login";
import Write from "./pages/content/Write";
import Modify from "./pages/content/Modify";

const routes = [
  { path: "", element: <>empty</> },
  { path: "login/*", element: <Login /> },
  { path: "content/write", element: <Write /> },
  { path: "content/modify", element: <Modify /> },
];

export default routes;
