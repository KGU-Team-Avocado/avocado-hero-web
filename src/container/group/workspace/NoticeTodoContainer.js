import { Grid } from "@mui/material"
import ResponsiveCard from "component/common/ResponsiveCard"
import Notice from "./Notice"
import Todo from "./Todo"

const NoticeTodoContainer = () => {

    return (
        <Grid
            container
            rowSpacing={{ xs: 1, sm: 1, md: 2 }}
            columnSpacing={{ sm: 1, md: 2 }}
        >
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
    )
}


export default NoticeTodoContainer;