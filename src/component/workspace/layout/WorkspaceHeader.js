import { Box, Divider, Grid, Typography } from "@mui/material";

const WorkspaceHeader = ({ title, action }) => {
    return (
        <Box my={2}>
            <Grid container columnSpacing={2}>
                <Grid display="flex" justifyContent="start" alignItems="center">
                    <Typography variant="h3" mx={2}>
                        {title}
                    </Typography>
                </Grid>
                {action ?
                    <Grid xs display="flex" justifyContent="end" alignItems="center">
                        {action}
                    </Grid>
                    : null}
            </Grid>

            <Divider sx={{ border: 1 }} />
        </Box>
    )
}

export default WorkspaceHeader;