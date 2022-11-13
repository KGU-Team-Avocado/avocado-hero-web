import { Box, Grid, Typography } from "@mui/material";
import ResponsiveCard from "component/common/ResponsiveCard";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

const Products = () => {
    return (
        <Box>
            <Typography variant="h3"><LocalGroceryStoreIcon/>판매</Typography>
            <Grid
                container
                rowSpacing={{ xs: 1, sm: 1, md: 2 }}
                columnSpacing={{ sm: 1, md: 2 }}
            >
                <Grid item xs={12} md={6}>
                    <ResponsiveCard>
                        <Typography>상품1</Typography>
                    </ResponsiveCard>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ResponsiveCard>
                        <Typography>상품2</Typography>
                    </ResponsiveCard>
                </Grid>
            </Grid>
        </Box>
    )
}
export default Products;