import { Grid, Stack, Typography } from "@mui/material";
import StoreIcon from '@mui/icons-material/Store';
import ResponsiveCard from "component/common/ResponsiveCard";

const Place = () => {
    return (
        <Stack>
            <Typography variant="h3"><StoreIcon />장소대여</Typography>
            <Grid
                container
                rowSpacing={{ xs: 1, sm: 1, md: 2 }}
                columnSpacing={{ sm: 1, md: 2 }}
            >
                <Grid item xs={12} md={6}>
                    <ResponsiveCard>
                        <Typography>모임장소</Typography>
                    </ResponsiveCard>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ResponsiveCard>
                        <Typography>전시회</Typography>
                    </ResponsiveCard>
                </Grid>
            </Grid>
        </Stack>
    )
}
export default Place;