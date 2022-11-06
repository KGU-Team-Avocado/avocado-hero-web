import { Box, Grid } from "@mui/material"
import ResponsiveCard from "component/common/ResponsiveCard"
import Notice from "./Notice"
import Todo from "./Todo"

export default () => {
    // 이거 반응형 왜 안됨? 개인적으로는 WorkspaceLayout.js에서 설정해주는 것이 의심됨
    
    return (
        <Box>
            <Grid conatiner spacing={2}>
                <Grid item xs={12} md={6}>
                    <ResponsiveCard>
                        <Notice />
                    </ResponsiveCard>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ResponsiveCard>
                        <Todo />
                    </ResponsiveCard>
                </Grid>
            </Grid>
        </Box>
    )
}