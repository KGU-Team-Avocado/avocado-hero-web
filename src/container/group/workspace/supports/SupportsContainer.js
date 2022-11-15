import { Stack } from "@mui/material";
import Funding from "./Funding";
import Place from "./Place";
import Products from "./Products";

const SupportsContainer = () => {
    return (
        <Stack spacing={2}>
            <Products/>
            <Funding/>
            <Place/>
        </Stack>
    );
};
export default SupportsContainer;