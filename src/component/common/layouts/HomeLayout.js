
import { Outlet } from "react-router-dom";
import routes from "./Navbars/routes";
// @mui material components
import Card from "@mui/material/Card";


import { CssBaseline, responsiveFontSizes, ThemeProvider } from "@mui/material";
import theme from "assets/theme";
import HomeTitle from "component/home/title/HomeTitle";
import DefaultNavbar from "./Navbars/DefaultNavbar";
import DefaultFooter from "./Footers/DefaultFooter";
import footerRoutes from "./Footers/footer.routes";
import MKBox from "../mui-components/MKBox";
import { useSelector } from "react-redux";
import { selectUser } from "api/redux/user/userSlice";
import { selectStatus } from "api/redux/user/userSlice";

export default function () {
  const user = useSelector(selectUser);
  const status = useSelector(selectStatus)

  return (
    <>
    {/* Responsive Font Size를 적용하려면 responsiveFontSizes를 써야한다 */}
      <ThemeProvider theme={responsiveFontSizes(theme)}>
        <CssBaseline />

        <DefaultNavbar
          routes={routes}
          action={{
            type: "internal",
            route: "/signin",
            label: "Login",
            color: "info",
          }}
          sticky
        />

        {/* 대문 시작 */}
        <div><button className={`btn btn-${user?"success":"danger"}`}>{user?"User Redux ON":"User Redux OFF"}</button></div>
        <HomeTitle />
        {/* 대문 끝 */}

        <Card
          sx={{
            p: {
              xs: 2,
              sm: 5,
              md: 5,
              lg: 5,
              xl: 5,
              xxl: 5
            },
            mx: {
              xs: 2,
              sm: 3,
              md: 5,
              lg: 10,
              xl: 15,
              xxl: 25
            },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <Outlet />
        </Card>

        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>

      </ThemeProvider>
    </>
  );
}