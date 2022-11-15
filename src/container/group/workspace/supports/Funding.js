import { Alert, Stack, Typography } from "@mui/material";
import ResponsiveCard from "component/common/ResponsiveCard";
import PaidIcon from '@mui/icons-material/Paid';
const Funding = () => {
    return (
        <Stack spacing={2}>
            <Typography variant="h5"><PaidIcon />펀딩</Typography>
            <Alert>
                프로젝트에서 제품을 만들 계획이신가요? 여러 사람들에게 펀딩 받으세요.
            </Alert>
            <ResponsiveCard>
                펀딩 페이지
            </ResponsiveCard>
        </Stack>
    );
};

export default Funding;