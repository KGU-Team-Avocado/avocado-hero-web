import { Stack } from "@mui/material";
import SignIn from "./SignIn";

const SignInContainer = () => {

  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
      >
        <SignIn/>
      </Stack>
    </>
  );
};

export default SignInContainer;
