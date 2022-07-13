import logo from './logo.svg';
import './App.css';
import HomeContainer from './container/home/HomeContainer';
import { Link, Route, Routes } from 'react-router-dom';
import DefaultLayout from './component/common/DefaultLayout';
import SignInContainer from './container/sign/sign_in/SignInContainer';
import SignUpContainer from './container/sign/sign_up/SignUpContainer';
import ExampleContainer from './container/example/ExampleContainer';
import ProfileContainer from './container/sign/profile/ProfileContainer';
import ProfileUpdateContainer from './container/sign/profile/ProfileUpdateContainer';

function App() {
  return (

    <Routes>
      {/* 이 Layout 안에 갇히게 됨... nested된 Container들은 Layout의 Outlet으로 연결된다 */}
      <Route path="/" element={<DefaultLayout />}>
        {/* DefaultLayout의 Outlet으로 연결되는 부분 시작 */}
        <Route path="/" element={<HomeContainer />} />
        <Route path="signin" element={<SignInContainer />} />
        <Route path="signup" element={<SignUpContainer />} />
        {/* 프로필 보기 */}
        <Route path="user/:id" element={<ProfileContainer />} /> 
        <Route path="example" element={<ExampleContainer />} />
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
  );
}

export default App;
