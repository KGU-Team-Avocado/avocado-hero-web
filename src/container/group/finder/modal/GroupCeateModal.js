import { useState } from "react"
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToHTML } from 'draft-convert';
import { EditorState } from 'draft-js';
import axios from "axios";
import { tags } from '../../../../assets/tag/tags'
import { Autocomplete, Box, Checkbox, DialogContent, DialogTitle, Divider, IconButton, Stack, TextField, Typography } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import MKButton from "component/common/mui-components/MKButton";
import { useSelector } from "react-redux";
import { selectUser } from "api/redux/user/userSlice";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const GroupCreateModal = ({ code, groupCreateModalOpen, setOpen }) => {

    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
    const checkedIcon = <CheckBoxIcon fontSize="small" />;
    
    const userInfo = useSelector(selectUser);

    const [project, setProject] = useState({
        group_name: '',
        project_name: '',
        short_description: '',
        capacity: 0,
    })

    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );
    const [convertedContent, setConvertedContent] = useState(null);

    const handleEditorChange = (state) => {
        setEditorState(state);
        convertContentToHTML();
    };
    const convertContentToHTML = () => {
        let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
        setConvertedContent(currentContentAsHTML);
    };

    const handleInput = (state) => {
        console.log(state)
        setProject({
            ...project,
            [state.target.id]: state.target.value
        })
    }

    const [selectedProjectTags, setSelectedProjectTags] = useState(null);
    const [selectedSkillTags, setSelectedSkillTags] = useState([]);
    const [selectedPersonalTags, setSelectedPersonalTags] = useState([]);
    const [selectedRoleTags, setSelectedRoleTags] = useState([]);
    

    const createGroup = () => {
        const newGroupData = {
            ...project,
            long_description: convertedContent,
            project_stack: selectedProjectTags.value,
            tech_stack: selectedSkillTags.map((s) => s.value),
            personal_stack: selectedPersonalTags.map((s) => s.value),
            role_stack: selectedRoleTags.map((s) => s.value),
            manager: userInfo.user_id,
            members: [{
                user_id: userInfo.user_id,
                user_name: userInfo.name,
                user_email: userInfo.email,
                user_role: []
            }],
            close_application: false,
            end_project: false,
            // applied : [],
            code: code.code,
        }
        console.log(newGroupData)

        const hasValue = Object.values(newGroupData).includes("");
        if (hasValue) {
            alert('빈 칸을 모두 채워주세요')
        }
        else {
            axios
                .post("/groupsRouter/create", newGroupData)
                .then((response) => {
                    if (response.data.success === true) {
                        // alert(JSON.stringify(response.data.group._id));
                        if (image.data !== '') {
                            alert('yes img')
                            uploadImage(response.data.group._id);
                        }
                        else {
                            alert('no img')
                            window.location.reload();
                        }
                    }
                    else {
                        alert('server error.' + JSON.stringify(response.data.err))
                        console.log(response.data.err);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    const uploadImage = async (group_id) => {
        let formData = new FormData()
        formData.append('group_id', group_id);
        formData.append('file', image.data); //반드시 file을 마지막에 append 해야 오류가 없음!!
        const response = await fetch('/groupsRouter/uploadImage', {
            method: 'POST',
            body: formData,
        })
        if (response) {
            window.location.reload();
        }
    }

    const [image, setImage] = useState({ preview: '', data: '' })
    const handleFileChange = (e) => {
        const img = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
        }
        console.log(img)
        setImage(img)
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
                }}
            >
                <DialogTitle id="scroll-dialog-title">
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="h4">
                            프로젝트 그룹 만들기
                        </Typography>
                        <IconButton size="large" onClick={() => setOpen(false)}><ClearIcon fontSize="inherit" /></IconButton >
                    </Box>
                </DialogTitle>
                <DialogContent dividers={true}>
                    <Stack spacing={1}>
                        <Stack mb={2}>
                            <Typography variant='h5' my={1}>대표 사진</Typography>
                            <input className='form-control' type='file' name='file' onChange={handleFileChange}></input>
                        </Stack>
                        {image.preview && <>
                            <Box my={3}>
                                <img src={image.preview} width='100%' height='300' alt="" />
                            </Box>
                        </>
                        }
                        {
                            code.code &&
                            <Box>
                                <TextField helperText="이 페이지에서 그룹 등록시 조직 내에서만 검색이 가능합니다." label='조직 코드' value={code.code} disabled fullWidth />
                            </Box>
                        }
                        <Divider/>
                        <Typography variant='h5' my={1}>기본 정보</Typography>
                        <TextField
                            sx={{ width: "100%" }}
                            label="그룹명"
                            variant="outlined"
                            value={project.group_name}
                            id="group_name"
                            onChange={handleInput}
                        />
                        <TextField
                            sx={{ width: "100%" }}
                            label="프로젝트명"
                            variant="outlined"
                            value={project.project_name}
                            id="project_name"
                            onChange={handleInput}
                        />
                        <TextField
                            sx={{ width: "100%" }}
                            label="카드에 보여줄 간단소개글 (1줄 이내로 권장)"
                            variant="outlined"
                            value={project.short_description}
                            id="short_description"
                            onChange={handleInput}
                        />
                        <TextField
                            sx={{ width: "100%" }}
                            label="모집 인원"
                            variant="outlined"
                            type="number"
                            value={project.capacity}
                            id="capacity"
                            onChange={handleInput}
                        />
                        <Box>
                            <Autocomplete
                                // multiple
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
                                    <TextField {...params} label="프로젝트 분류" placeholder="분류" />
                                )}
                            />
                        </Box>
                        <Box>
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
                                    <TextField {...params} label="이 프로젝트에서 사용하는 기술은..." placeholder="기술" />
                                )}
                            />
                        </Box>
                        <Box>
                            <Autocomplete
                                multiple
                                options={tags.personal}
                                disableCloseOnSelect
                                getOptionLabel={(option) => option.label}
                                value={selectedPersonalTags}
                                onChange={(event, newValue) => {
                                    setSelectedPersonalTags(newValue);
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
                                    <TextField {...params} label="지원자가 이런 성향이었으면 좋겠어요." placeholder="성향" />
                                )}
                            />
                        </Box>
                        <Box>
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
                                    <TextField {...params} label="이 포지션을 맡아줄 사람이 반드시 필요해요." placeholder="포지션" />
                                )}
                            />
                        </Box>
                        <Divider/>
                        {
                            groupCreateModalOpen &&
                            <Box>
                                <Typography variant="h5">상세소개글</Typography>
                                <Box>
                                    <Editor
                                        editorState={editorState}
                                        toolbarClassName="toolbarClassName"
                                        wrapperClassName="wrapperClassName"
                                        editorClassName="editorClassName"
                                        onEditorStateChange={handleEditorChange}
                                        editorStyle={{ height: 300, margin: 12, borderWidth: 0.5, padding: 10, borderRadius: "2px" }}
                                    />
                                </Box>
                            </Box>
                        }
                    </Stack>
                </DialogContent>
                <MKButton color="success" onClick={() => createGroup()} fullWidth disabled={userInfo === null}>등록하기</MKButton>
            </Box>
        </>
    )
}

export default GroupCreateModal;