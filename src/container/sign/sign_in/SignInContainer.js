import axios from "axios";
import { useState } from "react";

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
        if(response.data.success){
          sessionStorage.setItem("user", JSON.stringify(response.data));
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

  return (
    <div>
      {/* <img
        className="mb-4"
        src="/docs/5.2/assets/brand/bootstrap-logo.svg"
        alt=""
        width="72"
        height="57"
      /> */}
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

      <div className="form-floating">
        <input
          type="id"
          className="form-control"
          id="floatingInput"
          placeholder="아이디"
          onChange={handleId}
          value={id}
        />
        <label htmlFor="floatingInput">ID</label>
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
        <label htmlFor="floatingPassword">Password</label>
      </div>

      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button
        className="w-100 btn btn-lg btn-primary"
        type="submit"
        onClick={() => login()}
      >
        Sign in
      </button>
      <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
    </div>
  );
};

export default SignInContainer;
