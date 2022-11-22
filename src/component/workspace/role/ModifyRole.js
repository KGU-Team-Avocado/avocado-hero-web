import { Autocomplete, Box, Button, Checkbox, Stack, TextField } from "@mui/material";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;


const ModifyRole = ({role, member, selected, setSelected, modifyRole, cancleEdit}) => {
    return (
        <Box>
            <Autocomplete
                multiple
                options={role}
                disableCloseOnSelect
                getOptionLabel={(option) => option.label}
                value={selected}
                onChange={(event, newValue) => {
                    setSelected(newValue);
                }}
                renderOption={(props, option, { selected }) => (
                    <li {...props}>
                        <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{ marginRight: 8 }}
                            checked={selected}
                        />
                        {option.label}
                    </li>
                )}
                renderInput={(params) => (
                    <TextField {...params} label="역할" placeholder="수행 역할" />
                )}
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