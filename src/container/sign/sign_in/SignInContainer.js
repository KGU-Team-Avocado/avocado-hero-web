import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Card, CardContent, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, TextField, Typography } from "@mui/material";
import { initStatus } from "api/redux/user/userSlice";
import { selectStatus } from "api/redux/user/userSlice";
import { selectUser } from "api/redux/user/userSlice";
import { loginAsync } from "api/redux/user/userSlice";
import axios from "axios";
import MKButton from "component/common/mui-components/MKButton";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as API from "../../../api/API"

const SignInContainer = () => {

  const [values, setValues] = useState({
    id: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const user = useSelector(selectUser);
  const status = useSelector(selectStatus);

  const [id, setId] = useState(""); //deprecated
  const [password, setPassword] = useState(""); //deprecated
  const sessionStorage = window.sessionStorage; //deprecated

  let navigate = useNavigate();

  const dispatch = useDispatch();

  const handleId = (e) => {
    setId(e.currentTarget.value);
  };

  const handlePassword = (e) => {
    setPassword(e.currentTarget.value);
  };

  useEffect(() => {
    return () => {
      //clean up function으로 나갈 때 status를 초기 상태인 idle로 되돌려줌
      dispatch(initStatus());
    }
  }, [])

  useEffect(() => {
    // console.log('user is changed');
    // 로그인 성공 시
    if (user) {
      sessionStorage.setItem("user", JSON.stringify(user));
      navigate('/');
    }
  }, [user]);

  useEffect(() => {
    // console.log('user is changed');
    // 로그인 성공 시
    if (status === 'failed') {
      alert("아이디/비밀번호를 다시 입력해주세요.")
    }
  }, [status]);

  const login = () => {
    // console.log(id, password);
    dispatch(loginAsync({ id, password })); // Redux user Store에 저장하는 과정을 기존 로그인에 통합함.
  };

  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
      >
        <Card sx={{
          maxWidth: 500,
          width: "100%",
          py: 5,
          px: {
            xs: 1,
            sm: 2,
            md: 5,
          }
        }}>
          <CardContent>
            <Typography variant="h2">로그인(프론트만 제작)</Typography>
            <Stack my={3} spacing={1}>
              {/* id */}
              <TextField
                id="outlined-basic"
                label="ID"
                variant="outlined"
                onChange={handleChange('id')}
              />
              {/* pw */}
              <FormControl sx={{}} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <Link to="/signup">
                아직 회원이 아니신가요?
              </Link>
              <MKButton
                color="success"
                variant="contained"
                size="large"
              >
                로그인
              </MKButton>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
      {status}
      <div className="d-flex justify-content-center">
        <div className="card p-5 w-100" style={{ 'maxWidth': '500px', 'minWidth': '300px' }} >
          <h1>로그인(Deprecated)</h1>
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
              className="w-100 btn btn-lg btn-success"
              type="submit"
              onClick={() => login()}
            >
              Sign in (Redux Included)
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInContainer;
