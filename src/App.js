import logo from "./logo.svg";
import "./App.css";
import HomeContainer from "./container/home/HomeContainer";
import { Link, Route, Routes } from "react-router-dom";
import DefaultLayout from "./component/common/DefaultLayout";
import SignInContainer from "./container/sign/sign_in/SignInContainer";
import SignUpContainer from "./container/sign/sign_up/SignUpContainer";
import ExampleContainer from "./container/example/ExampleContainer";
import ProfileContainer from "./container/sign/profile/ProfileContainer";
import HomeLayout from "./component/common/HomeLayout";
import HumanResources from "./container/company/HumanResources";
import JobPosting from "./container/company/JobPosting";
import GroupFinderContainer from "./container/group/finder/GroupFinderContainer";
import JobFinderContainer from "./container/jobFinder/JobFinderContainer";
import RankContainer from "./container/example/RankContainer";
import GroupListContainer from "./container/group/workspace/GroupListContainer";
import ProjectContainer from "./container/group/workspace/ProjectNoticeContainer";
import ProjectDefaultLayout from "./container/group/workspace/ProjectDefaultLayout";
import ProjectCalendarContainer from "./container/group/workspace/ProjectCalendarContainer";
import ProjectTodoContainer from "./container/group/workspace/ProjectTodoContainer";
import ProjectRoleContainer from "./container/group/workspace/ProjectRoleContainer";
import ProjectMembersContainer from "./container/group/workspace/ProjectMembersContainer";
import ProjectEndContainer from "./container/group/workspace/ProjectEndContainer";
import UserProfileContainer from "./container/sign/user_profile/UserProfileContainer";
import ProfileUpdate from "./container/sign/profile/ProfileUpdate";
import DatabaseContainer from "./container/example/DatabaseContainer";
import MultiSelectExampleContainer from "./container/example/MultiSelectExampleContainer";
import ProjectEvaluationContainer from "./container/group/workspace/ProjectEvaluationContainer";
import FileUploadExample from "./container/example/FileUploadExample";
import ProfileGroup from "./container/sign/profile/ProfileGroup";
import ProfilePortpolio from "./container/sign/profile/ProfilePortpolio";

function App() {
  return (
    <Routes>
      {/* 이 Layout 안에 갇히게 됨... nested된 Container들은 Layout의 Outlet으로 연결된다 */}
      <Route path="/" element={<HomeLayout/>}>
        <Route path="/" element={<HomeContainer />} />
      </Route>
      <Route path="/" element={<DefaultLayout />}>
        {/* DefaultLayout의 Outlet으로 연결되는 부분 시작 */}

        <Route path="groupFinder" element={<GroupFinderContainer/>}/>
        <Route path="jobFinder" element={<JobFinderContainer/>}/>

        <Route path="signin" element={<SignInContainer />} />
        <Route path="signup" element={<SignUpContainer />} />
        {/* 프로필 보기 */}
        <Route path="user/:id" element={<ProfileContainer />} />
        <Route path="userProfile/:id" element={<UserProfileContainer />} />
        <Route path="user/ProfileUpdate/:id" element={<ProfileUpdate />} />
        <Route path="user/ProfileGroup" element={<ProfileGroup />} />
        <Route path="user/ProfilePortpolio" element={<ProfilePortpolio />} />
        {/* 워크스페이스 */}
        <Route path="myWorkspace" element={<GroupListContainer />} />

        <Route path="example" element={<ExampleContainer />} />
        <Route path="example/bestworker" element={<RankContainer/>}/>
        <Route path="example/database" element={<DatabaseContainer/>}/>
        <Route path="example/multiSelectExample" element={<MultiSelectExampleContainer/>}/>
        <Route path="example/fileUpload" element={<FileUploadExample/>}/>

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
        <Route path="evaluation/:id/:user_id" element={<ProjectEvaluationContainer />} />
      </Route>
    </Routes>
  );
}

export default App;