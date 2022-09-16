
import { Outlet, Link } from "react-router-dom";
import Header from "./Header";
// Routes

import DefaultNavbar from "./Navbars/DefaultNavbar";
import routes from "./Navbars/routes";

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