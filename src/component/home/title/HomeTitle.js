import { Container, Grid, Stack } from "@mui/material"
import { useLocation } from "react-router-dom";

// Images
import bgImage from "assets/images/bg2.jpg";
import mainRoutes from "api/route/homeRoutes";
import MKBox from "component/common/mui-components/MKBox";
import MKTypography from "component/common/mui-components/MKTypography";


export default () => {
    const router = useLocation();
    const routeInfo = mainRoutes.find((item) => item.path === router.pathname);
    return (
        <>
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
                    <Stack direction={"column"} alignItems="center">
                        <MKTypography
                            variant="h1"
                            color="white"
                        >
                            {routeInfo?.name}
                        </MKTypography>
                        <MKTypography
                            variant="body1"
                            color="white"
                        >
                            {routeInfo?.description}
                        </MKTypography>
                    </Stack>
                </Container>
            </MKBox>
        </>
    )
}