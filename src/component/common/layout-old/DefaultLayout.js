import { selectStatus } from "api/redux/user/userSlice";
import { selectUser } from "api/redux/user/userSlice";
import { useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";
import Header from "./Header";

/**
 * @deprecated
 */
export default function DefaultLayout() {
  const user = useSelector(selectUser);
  const status = useSelector(selectStatus)

  return (
    <div>
      <div className="mb-2">
      {/* <div>{JSON.stringify(user)}</div> */}
        <Header />
      </div>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}