import { Outlet, Link } from "react-router-dom";
import Header from "./Header";

/**
 * @deprecated
 */
export default function DefaultLayout() {
  return (
    <div>
      <div className="mb-2">
        <Header />
      </div>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}