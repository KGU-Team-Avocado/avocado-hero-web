import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

// Material Kit 2 React themes
import theme from "assets/theme";
import ReduxExample from "container/example/ReduxExample";
import homeRoutes from "api/route/homeRoutes";
import HomeLayout from "component/common/layouts/HomeLayout";
import workspaceRoutes from "api/route/workspaceRoutes";
import WorkspaceLayout from "component/workspace/layout/WorkspaceLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          {homeRoutes.map((route) => <Route path={route.path} element={route.element} key={route.path} />)}
        </Route>
        <Route path="/workspace" element={<WorkspaceLayout />}>
          {workspaceRoutes.map((route) => <Route path={route.path} element={route.element} key={route.path} />)}
        </Route>
      </Routes>
    </>
  );
}

export default App;