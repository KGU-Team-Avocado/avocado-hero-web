import { Autocomplete, Box, Checkbox, DialogContent, DialogTitle, IconButton, MenuItem, Stack, TextField, Typography } from "@mui/material"
import ClearIcon from '@mui/icons-material/Clear';
import MKButton from "component/common/mui-components/MKButton";
import { options } from '../../../../assets/tag/Tech'
import { useRef, useState } from "react";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default (props) => {
    const [selected, setSelected] = useState([]);
    const inputTN = useRef();
    const inputPN = useRef();
    const inputMID = useRef();

    const handleChange = (isSelected, option) => {
        if (isSelected) {
            setSelected(selected.filter((select) => select === option.value ? null : select));
        } else {
            setSelected(selected.concat(option.value));
        }
    };

    const serch = () => {   
        console.log(inputTN.current.value);
        console.log(inputPN.current.value);
        console.log(inputMID.current.value);
        console.log(selected);
    }

    return (
        <>
            <Box
                sx={{
                    p: {
                        xs: 1,
                        sm: 2,
                        md: 3,
                        lg: 4,
                        xl: 5,
                        xxl: 6
                    },
                    // width:"100%"
                }}
            >
                <DialogTitle id="scroll-dialog-title">
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="h3">
                            검색하기
                        </Typography>
                        <IconButton size="large" onClick={() => props.setOpen(false)}><ClearIcon fontSize="inherit" /></IconButton >
                    </Box>
                </DialogTitle>
                <DialogContent dividers={true}>
                    <Stack spacing={2}>
                        <TextField label="팀명" inputRef={inputTN} />
                        <TextField label="프로젝트명" inputRef={inputPN} />
                        <TextField label="팀장 아이디" inputRef={inputMID} />
                        <Autocomplete
                            multiple
                            options={options}
                            disableCloseOnSelect
                            getOptionLabel={(option) => option.label}
                            renderOption={(props, option, { selected }) => (
                                <div onClick={() => handleChange(selected, option)}>
                                    <li {...props}>
                                        <Checkbox
                                            icon={icon}
                                            checkedIcon={checkedIcon}
                                            style={{ marginRight: 8 }}
                                            checked={selected}
                                        />
                                        {option.label}
                                    </li>
                                </div>
                            )}
                            renderInput={(params) => (
                                <TextField {...params} label="태그" placeholder="기술 스택" />
                            )}
                        />
                    </Stack>
                </DialogContent>
                {/* <DialogActions> */}
                <MKButton
                    color="success"
                    onClick={() => serch()}
                    fullWidth
                >
                    위 조건으로 검색하기
                </MKButton>
                {/* </DialogActions> */}
            </Box>
        </>
    )
}