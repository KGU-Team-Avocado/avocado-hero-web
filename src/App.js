import logo from "./logo.svg";
import "./App.css";
import HomeContainer from "./container/home/HomeContainer";
import { Link, Route, Routes } from "react-router-dom";
import SignInContainer from "./container/sign/sign_in/SignInContainer";
import SignUpContainer from "./container/sign/sign_up/SignUpContainer";
import ProfileContainer from "./container/sign/profile/ProfileContainer";
import HumanResources from "./container/company/HumanResources";
import JobPosting from "./container/company/JobPosting";
import GroupFinderContainer from "./container/group/finder/GroupFinderContainer";
import JobFinderContainer from "./container/jobFinder/JobFinderContainer";
import WorkspaceListContainer from "./container/group/workspace/WorkspaceListContainer";
import ProfileUpdate from "./container/sign/profile/ProfileUpdate";
import ProjectEvaluationContainer from "./container/group/workspace/ProjectEvaluationContainer";
import ProfileGroup from "./container/sign/profile/ProfileGroup";
import ProfilePortpolio from "./container/sign/profile/ProfilePortpolio";
import WorkspaceLayout from "component/workspace/layout/WorkspaceLayout";

// Material Kit 2 React themes
import theme from "assets/theme";
import ReduxExample from "container/example/ReduxExample";
import homeRoutes from "api/route/homeRoutes";
import HomeLayout from "component/common/layouts/HomeLayout";
import workspaceRoutes from "api/route/workspaceRoutes";

const WorkspaceRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/workspace" element={<WorkspaceLayout />}>
          {workspaceRoutes.map((route) => <Route path={route.path} element={route.element} key={route.path} />)}
        </Route>
      </Routes>
    </>
  )
}

const HomeRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        {homeRoutes.map((route) => <Route path={route.path} element={route.element} key={route.path} />)}
      </Route>
    </Routes>
  )
}

function App() {
  return (
    <>
      <HomeRoute />
      <WorkspaceRoute />
    </>
  );
}

export default App;