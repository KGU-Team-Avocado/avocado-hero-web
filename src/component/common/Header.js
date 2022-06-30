import { Outlet, Link } from "react-router-dom";

export default function DefaultView() {
  return (
    <div>
      <Link to='/'><h1>Header</h1></Link>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/signin">SignIn</Link> |{" "}
        <Link to="/signup">SignUp</Link>
      </nav>
      <Outlet />
    </div>
  );
}