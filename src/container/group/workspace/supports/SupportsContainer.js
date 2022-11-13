import { Box, Stack } from "@mui/material";
import Funding from "./Funding";
import Products from "./Products";

const SupportsContainer = () => {
    return (
        <Stack spacing={2}>
            <Products/>
            <Funding/>
        </Stack>
    )
}
export default SupportsContainer;