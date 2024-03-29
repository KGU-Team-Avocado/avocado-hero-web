import { Autocomplete, Box, Checkbox, DialogContent, DialogTitle, IconButton, MenuItem, Stack, TextField, Typography } from "@mui/material"
import ClearIcon from '@mui/icons-material/Clear';
import MKButton from "component/common/mui-components/MKButton";
import { options } from '../../../../assets/tag/Tech'
import { useRef, useState } from "react";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import * as API from '../../../../api/API';
import { tags } from '../../../../assets/tag/tags'

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const GroupFilterModal = (props) => {
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

    const [selectedProjectTags, setSelectedProjectTags] = useState([]);
    const [selectedSkillTags, setSelectedSkillTags] = useState([]);
    const [selectedRoleTags, setSelectedRoleTags] = useState([]);

    const filter = async () => {
        const newfilterData = {
            group_name: inputTN.current.value,
            project_name: inputPN.current.value,
            // manager: inputMID.current.value,
            // tech_stack: selected.map((item) => {return item.value})
            project_stack: selectedProjectTags.map((s) => s.value),
            tech_stack: selectedSkillTags.map((s) => s.value),
            role_stack: selectedRoleTags.map((s) => s.value),
        }

        setFilterData(newfilterData)
        const response = await API.groupFilter(newfilterData);
        props.filterGroup(response);
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
                        <TextField label="팀명" inputRef={inputTN} defaultValue={filterData.group_name} />
                        <TextField label="프로젝트명" inputRef={inputPN} defaultValue={filterData.project_name} />
                        {/* <TextField label="팀장 아이디" inputRef={inputMID} defaultValue={filterData.manager} /> */}

                        <Autocomplete
                            multiple
                            options={tags.projects}
                            disableCloseOnSelect
                            getOptionLabel={(option) => option.label}
                            value={selectedProjectTags}
                            onChange={(event, newValue) => {
                                setSelectedProjectTags(newValue);
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
                                <TextField {...params} label="분야" placeholder="분야" />
                            )}
                        />

                        <Autocomplete
                            multiple
                            options={tags.tech}
                            disableCloseOnSelect
                            getOptionLabel={(option) => option.label}
                            value={selectedSkillTags}
                            onChange={(event, newValue) => {
                                setSelectedSkillTags(newValue);
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
                                <TextField {...params} label="기술" placeholder="기술" />
                            )}
                        />

                        <Autocomplete
                            multiple
                            options={tags.role}
                            disableCloseOnSelect
                            getOptionLabel={(option) => option.label}
                            value={selectedRoleTags}
                            onChange={(event, newValue) => {
                                setSelectedRoleTags(newValue);
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
                                <TextField {...params} label="포지션" placeholder="포지션" />
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

export default GroupFilterModal;