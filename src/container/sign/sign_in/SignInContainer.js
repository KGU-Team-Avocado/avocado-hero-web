import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as API from "../../../api/API"

const SignInContainer = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const sessionStorage = window.sessionStorage;

  const handleId = (e) => {
    setId(e.currentTarget.value);
  };

  const handlePassword = (e) => {
    setPassword(e.currentTarget.value);
  };

  const login = () => {
    console.log(id, password);
    axios
      .post("usersRouter/login", {
        id: id,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.status === "success") {
          sessionStorage.setItem("user", JSON.stringify(response.data.user));
          window.location.href = "/";
        }
        else {
          return alert("아이디/비밀번호를 다시 입력해주세요.")
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const loginByRedux = async () => {
    console.log(id, password);
    console.log(await API.loginCheck(id, password));
  }

  return (
    <div className="d-flex justify-content-center pt-5">
      <div className="card p-5 w-100" style={{'maxWidth':'500px','minWidth':'300px'}} >
        <h1>로그인</h1>
        <div className="py-3">
          <div className="form-floating">
            <input
              type="id"
              className="form-control"
              id="floatingInput"
              placeholder="아이디"
              onChange={handleId}
              value={id}
            />
            <label htmlhtmlFor="floatingInput">ID</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={handlePassword}
              value={password}
            />
            <label htmlhtmlFor="floatingPassword">Password</label>
          </div>

          <div className="checkbox">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <div className="my-3">
            <Link to='/signup'>아직 회원이 아니신가요?</Link>
          </div>
          <button
            className="w-100 btn btn-lg btn-primary"
            type="submit"
            // onClick={() => login()}
            onClick={() => loginByRedux()}
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInContainer;
