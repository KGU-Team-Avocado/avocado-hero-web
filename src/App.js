import logo from './logo.svg';
import './App.css';
import HomeContainer from './container/home/HomeContainer';
import { Link, Route, Routes } from 'react-router-dom';
import Header from './component/common/Header';
import SignInContainer from './container/sign/sign_in/SignInContainer';
import SignUpContainer from './container/sign/sign_up/SignUpContainer';

function App() {
  return (

    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<HomeContainer />} />
        <Route path="signin" element={<SignInContainer />} />
        <Route path="signup" element={<SignUpContainer />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
