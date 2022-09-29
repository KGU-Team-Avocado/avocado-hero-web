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
                <Button variant="outlined" color="error" size="small" onClick={() => cancleEdit("")}>취소</Button>
            </Stack>
            {/* <div className="mt-2 d-flex justify-content-end">
                <button type="button" className="btn btn-secondary me-2" onClick={() => modifyRole(member)} >저장</button>
                <button type="button" className="btn btn-danger" onClick={() => cancleEdit("")} data-bs-dismiss="modal">취소</button>
            </div> */}
        </Box>
    )
}

export default ModifyRole;