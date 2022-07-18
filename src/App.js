import logo from "./logo.svg";
import "./App.css";
import HomeContainer from "./container/home/HomeContainer";
import { Link, Route, Routes } from "react-router-dom";
import DefaultLayout from "./component/common/DefaultLayout";
import SignInContainer from "./container/sign/sign_in/SignInContainer";
import SignUpContainer from "./container/sign/sign_up/SignUpContainer";
import ExampleContainer from "./container/example/ExampleContainer";
import ProfileContainer from "./container/sign/profile/ProfileContainer";
import HumanResources from "./container/company/HumanResources";
import JobPosting from "./container/company/JobPosting";
import GroupFinderContainer from "./container/group/finder/GroupFinderContainer";
import JobFinderContainer from "./container/jobFinder/JobFinderContainer";
import RankContainer from "./container/example/RankContainer";
import WorkSpaceContainer from "./container/sign/workspace/WorkSpaceContainer";
import ProjectContainer from "./container/group/project/ProjectContainer";
import ProjectDefaultLayout from "./component/project/ProjectDefaultLayout";
import ProjectCalendarContainer from "./container/group/project/ProjectCalendarContainer";
import ProjectTodoContainer from "./container/group/project/ProjectTodoContainer";
import ProjectRoleContainer from "./container/group/project/ProjectRoleContainer";
import ProjectMembersContainer from "./container/group/project/ProjectMembersContainer";
import ProjectEndContainer from "./container/group/project/ProjectEndContainer";

function App() {
  return (
    <Routes>
      {/* 이 Layout 안에 갇히게 됨... nested된 Container들은 Layout의 Outlet으로 연결된다 */}
      <Route path="/" element={<DefaultLayout />}>
        {/* DefaultLayout의 Outlet으로 연결되는 부분 시작 */}
        <Route path="/" element={<HomeContainer />} />

        <Route path="groupFinder" element={<GroupFinderContainer/>}/>
        <Route path="jobFinder" element={<JobFinderContainer/>}/>

        <Route path="signin" element={<SignInContainer />} />
        <Route path="signup" element={<SignUpContainer />} />
        {/* 프로필 보기 */}
        <Route path="user/:id" element={<ProfileContainer />} />
        {/* 워크스페이스 */}
        <Route path="myWorkspace" element={<WorkSpaceContainer />} />

        <Route path="example" element={<ExampleContainer />} />
        <Route path="example/bestworker" element={<RankContainer/>}/>

        {/* 기업용 버튼 */}
        <Route path="humanRes" element={<HumanResources />} />
        <Route path="jobPosting" element={<JobPosting />} />

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
      
      <Route path="project/" element={<ProjectDefaultLayout />}>
        {/* 프로젝트 대쉬보드 */}
        <Route path=":id" element={<ProjectContainer />} />
        <Route path="calendar/:id" element={<ProjectCalendarContainer />} />
        <Route path="todo/:id" element={<ProjectTodoContainer />} />
        <Route path="role/:id" element={<ProjectRoleContainer />} />
        <Route path="members/:id" element={<ProjectMembersContainer />} />
        <Route path="end/:id" element={<ProjectEndContainer />} />
      </Route>
    </Routes>
  );
}

export default App;
