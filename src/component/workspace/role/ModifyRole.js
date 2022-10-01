import { Box, Button, Stack } from "@mui/material";
import { MultiSelect } from "react-multi-select-component";

const ModifyRole = ({role, member, selected, setSelected, modifyRole, cancleEdit}) => {
    return (
        <Box>
            <MultiSelect
                options={role}
                value={selected}
                onChange={setSelected}
            />
            <Stack
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                spacing={0.5}
                mt={1}
            >
                <Button variant="outlined" size="small" onClick={() => modifyRole(member)}>저장</Button>
                <Button variant="outlined" color="error" size="small" onClick={() => cancleEdit()}>취소</Button>
            </Stack>
        </Box>
    )
}

export default ModifyRole;