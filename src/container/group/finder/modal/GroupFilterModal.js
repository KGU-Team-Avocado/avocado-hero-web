import { Autocomplete, Box, Button, Checkbox, DialogContent, DialogTitle, IconButton, MenuItem, Stack, TextField, Typography } from "@mui/material"
import ClearIcon from '@mui/icons-material/Clear';
import MKButton from "component/common/mui-components/MKButton";
import { options } from '../../../../assets/tag/Tech'
import { useRef, useState } from "react";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import * as API from '../../../../api/API';
import SettingsBackupRestoreRoundedIcon from '@mui/icons-material/SettingsBackupRestoreRounded';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default (props) => {
    const [selected, setSelected] = useState([]);
    const [filterData, setFilterData] = useState({
        group_name: "",
        project_name: "",
        manager: "",
        tech_stack: []
    })
    const inputTN = useRef();
    const inputPN = useRef();
    const inputMID = useRef();

    // 필터링 데이터 저장(필요시 redux로 관리할 수 있음), 필터링한 그룹 데이터 받아오기, 결과 데이터 부모 컨테이너로 넘기기
    const filter = async () => {
        const newfilterData = {
            group_name: inputTN.current.value,
            project_name: inputPN.current.value,
            manager: inputMID.current.value,
            tech_stack: selected.map((item) => {return item.value})
        }

        setFilterData(newfilterData)
        const response = await API.groupFilter(newfilterData);
        props.filterGroup(response);
    }

    // 필터링 초기화. 입력창 초기화, 필터링 데이터 초기화, 그룹 데이터도 초기화할 부모 메소드 호출
    const clearFilter = () => {
        inputTN.current.value = "";
        inputPN.current.value = "";
        inputMID.current.value = "";
        setFilterData({
            group_name: "",
            project_name: "",
            manager: "",
            tech_stack: []
        });
        setSelected([]);
        props.resetGroups();
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
                        <Box>
                            <IconButton size="large" onClick={() => clearFilter()}><SettingsBackupRestoreRoundedIcon /></IconButton>
                            <IconButton size="large" onClick={() => props.setOpen(false)}><ClearIcon fontSize="inherit" /></IconButton >
                        </Box>
                    </Box>
                </DialogTitle>
                <DialogContent dividers={true}>
                    <Stack spacing={2}>
                        <TextField label="팀명" inputRef={inputTN} defaultValue={filterData.group_name} />
                        <TextField label="프로젝트명" inputRef={inputPN} defaultValue={filterData.project_name} />
                        <TextField label="팀장 아이디" inputRef={inputMID} defaultValue={filterData.manager} />
                        <Autocomplete
                            multiple
                            options={options}
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
                                <TextField {...params} label="태그" placeholder="기술 스택" />
                            )}
                        />
                    </Stack>
                </DialogContent>
                {/* <DialogActions> */}
                <MKButton
                    color="success"
                    onClick={() => filter()}
                    fullWidth
                >
                    위 조건으로 검색하기
                </MKButton>
                {/* </DialogActions> */}
            </Box>
        </>
    )
}