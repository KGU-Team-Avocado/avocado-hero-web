import { Alert, Stack } from "@mui/material";
import SignIn from "./SignIn";
import React from 'react';

const SignInContainer = () => {

  return (
    <>
      <Stack mb={3}>
        <Alert>
          이제 로그인 시 Enter 키를 누를 수 있습니다.
        </Alert>
      </Stack>

      <Stack
        direction="row"
        justifyContent="center"
      >
        <SignIn />
      </Stack>
    </>
  );
};

export default SignInContainer;
