
import { Outlet, Link } from "react-router-dom";
import routes from "./Navbars/routes";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "mui/components/MKBox";
import MKTypography from "mui/components/MKTypography";
import MKSocialButton from "mui/components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "mui/examples/Navbars/DefaultNavbar";
import DefaultFooter from "mui/examples/Footers/DefaultFooter";
import FilledInfoCard from "mui/examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
import Counters from "mui/pages/Presentation/sections/Counters";
import Information from "mui/pages/Presentation/sections/Information";
import DesignBlocks from "mui/pages/Presentation/sections/DesignBlocks";
import Pages from "mui/pages/Presentation/sections/Pages";
import Testimonials from "mui/pages/Presentation/sections/Testimonials";
import Download from "mui/pages/Presentation/sections/Download";

// Presentation page components
import BuiltByDevelopers from "mui/pages/Presentation/components/BuiltByDevelopers";
// Routes

import footerRoutes from "mui/footer.routes";

// Images
import bgImage from "assets/images/bg-presentation.jpg";

export default function DefaultLayout() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "Login",
          color: "info",
        }}
        sticky
      />
      {/* 대문 시작 */}
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              아보카도 히어로는...{" "}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              팀 프로젝트의 처음부터 끝까지<br></br>
              함께하는 국내 유일의 서비스입니다.
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      {/* 대문 끝 */}

      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
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

    </>
  );
}