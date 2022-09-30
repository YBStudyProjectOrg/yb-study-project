import Login from "./pages/login";
import Write from "./pages/content/write";
import Modify from "./pages/content/modify";

const routes = [
  { path: "", element: <>empty</> },
  { path: "login/*", element: <Login /> },
  { path: "content/write", element: <Write /> },
  { path: "content/modify", element: <Modify /> },
];

export default routes;
