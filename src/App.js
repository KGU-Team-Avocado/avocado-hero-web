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
import UserProfileContainer from "./container/sign/user_profile/UserProfileContainer";
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
import DefaultLayout from "component/common/layout-old/DefaultLayout";
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
      <Routes>
        {/* 이 Layout 안에 갇히게 됨... nested된 Container들은 Layout의 Outlet으로 연결된다 */}

        <Route path="/" element={<DefaultLayout />}>
          {/* DefaultLayout의 Outlet으로 연결되는 부분 시작 */}

          {/* 프로필 보기 */}
          <Route path="old/user/:id" element={<ProfileContainer />} />
          <Route path="user/ProfileUpdate/:id" element={<ProfileUpdate />} />
          <Route path="user/ProfileGroup" element={<ProfileGroup />} />
          <Route path="user/ProfilePortpolio" element={<ProfilePortpolio />} />
          {/* 워크스페이스 */}
          <Route path="old/myWorkspace" element={<WorkspaceListContainer />} />

          {/* 기업용 버튼 */}
          <Route path="humanRes" element={<HumanResources />} />
          <Route path="old/jobPosting" element={<JobPosting />} />

          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>잘못된 요청입니다!</p>
              </main>
            }
          />
          {/* DefaultLayout의 Outlet으로 연결되는 부분 끝 */}
        </Route>

      </Routes>
    </>

  );
}

export default App;