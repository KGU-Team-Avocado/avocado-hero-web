import { Stack, Typography } from "@mui/material";
import ResponsiveCard from "component/common/ResponsiveCard";
import PaidIcon from '@mui/icons-material/Paid';
const Funding = () => {
    return (
        <Stack>
            <Typography variant="h3"><PaidIcon />펀딩</Typography>
            <ResponsiveCard>
                펀딩 페이지
            </ResponsiveCard>
        </Stack>
    )
}

export default Funding;