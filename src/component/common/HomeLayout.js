
import { Outlet, Link } from "react-router-dom";
import Header from "./Header";
// Routes
import routes from "mui/routes";
import DefaultNavbar from "./Navbars/DefaultNavbar";

export default function DefaultLayout() {
  return (
    <div>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "Login",
          color: "info",
        }}
        sticky
      />
      <div>
        <Outlet />
      </div>
    </div>
  );
}