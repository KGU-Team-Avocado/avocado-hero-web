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

  const sessionStorage = window.sessionStorage; //deprecated

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const status = useSelector(selectStatus);

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


  useEffect(() => {
    return () => {
      //clean up function으로 나갈 때 status를 초기 상태인 idle로 되돌려줌
      dispatch(initStatus());
    }
  }, [])

  useEffect(() => {
    // 로그인 성공 시
    if (user) {
      sessionStorage.setItem("user", JSON.stringify(user));
      navigate('/');
    }
  }, [user]);

  const login = () => {
    dispatch(loginAsync({ id: values.id, password: values.password })); // Redux user Store에 저장
  };

  const statusDescription = (status) => {
    switch (status) {
      case "idle":
        return "";
      case "loading":
        return "확인중...";
      case "failed":
        return "로그인 실패!";
      default:
        return "?????";
    }
  }

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
            <Typography variant="h2">로그인</Typography>
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
              <Typography variant="h6" color="red">
                {statusDescription(status)}
              </Typography>
              <Link to="/signup">
                아직 회원이 아니신가요?
              </Link>
              <MKButton
                color="success"
                variant="contained"
                size="large"
                onClick={() => login()}
              >
                로그인
              </MKButton>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </>
  );
};

export default SignInContainer;
