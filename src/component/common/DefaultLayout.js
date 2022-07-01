import { Outlet, Link } from "react-router-dom";
import Header from "./Header";

export default function DefaultLayout() {
  return (
    <div>
      <div class="container">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}