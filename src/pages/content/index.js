import { useRoutes } from "react-router-dom";
import routes from "@PAGES/content/content.routes";

export default function Content() {
  return useRoutes(routes);
}
