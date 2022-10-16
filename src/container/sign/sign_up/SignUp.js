import axios from "axios";

import { useRef, useState } from "react";
import { Card, CardContent, FormControl, FormControlLabel, FormLabel, IconButton, InputAdornment, InputLabel, OutlinedInput, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material";
import MKButton from "component/common/mui-components/MKButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "api/redux/user/userSlice";

export default () => {
    let navigate = useNavigate();

    const user = useSelector(selectUser);

    const [values, setValues] = useState({
        id: '',
        password: '',
        confirmPassword: '',
        userName: '',
        email: '',
        type: '개인',
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const signUp = () => {
        console.log(JSON.stringify(values));
        if (Object.values(values).every((val) => val.length > 0)) {
            // 회원가입 허용
            alert('회원가입 시켜줄게')
            axios
                .post("/usersRouter/register", {
                    user_id: values.id,
                    user_password: values.password,
                    name: values.userName,
                    email: values.email,
                    type: values.type,
                })
                .then((response) => {
                    console.log(response);
                    if (response.data.idCheck === false) {
                        alert("이미 사용중인 아이디입니다.");
                    }
                    if (response.data.success === true) {
                        // navigate('/')
                        window.location.href = ""; //홈에서 회원가입 하는 사람을 위해서는 그냥 refresh가 더 나음
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });

        }
        else {
            // 다시 입력하라고 난리
            alert('안돼 돌아가')
        }
    }
    return (
        <>
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
                    {
                        user
                            ?
                            <Typography variant="h3">이미 로그인이 되어있네요</Typography>
                            :
                            <>
                                <Typography variant="h2">회원가입</Typography>
                                <Stack my={3} spacing={1}>
                                    {/* id */}
                                    <TextField
                                        id="outlined-basic-id"
                                        label="아이디"
                                        variant="outlined"
                                        onChange={handleChange('id')}
                                    />
                                    {/* pw */}
                                    <FormControl sx={{}} variant="outlined">
                                        <InputLabel htmlFor="outlined-adornment-password">비밀번호</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-password"
                                            type={showPassword ? 'text' : 'password'}
                                            value={values.password}
                                            onChange={handleChange('password')}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={() => setShowPassword(!showPassword)}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            label="Password"
                                        />
                                    </FormControl>
                                    {/* confirmPassword */}
                                    <FormControl sx={{}} variant="outlined">
                                        <InputLabel htmlFor="outlined-adornment-password">비밀번호 확인</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-confirm-password"
                                            type={showPassword ? 'text' : 'password'}
                                            value={values.confirmPassword}
                                            onChange={handleChange('confirmPassword')}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={() => setShowPassword(!showPassword)}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            label="Password"
                                        />
                                    </FormControl>
                                    {/* userName */}
                                    <TextField
                                        id="outlined-basic-name"
                                        label="이름"
                                        variant="outlined"
                                        onChange={handleChange('userName')}
                                    />
                                    {/* email */}
                                    <TextField
                                        id="outlined-basic-email"
                                        label="이메일"
                                        variant="outlined"
                                        onChange={handleChange('email')}
                                    />
                                    {/* type */}
                                    <FormControl>
                                        <FormLabel id="demo-controlled-radio-buttons-group">회원유형</FormLabel>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                            name="controlled-radio-buttons-group"
                                            value={values.type}
                                            onChange={handleChange('type')}
                                        >
                                            <FormControlLabel value="개인" control={<Radio />} label="개인" />
                                            <FormControlLabel value="기업" control={<Radio />} label="기업" />
                                        </RadioGroup>
                                    </FormControl>
                                    <MKButton
                                        color="success"
                                        variant="contained"
                                        size="large"
                                        onClick={() => signUp()}
                                    >
                                        회원가입
                                    </MKButton>
                                </Stack>

                            </>
                    }
                </CardContent>
            </Card>
        </>
    )
}