import { useEffect, useState } from "react"
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToHTML } from 'draft-convert';
import { EditorState } from 'draft-js';
import { MultiSelect } from "react-multi-select-component";
import axios from "axios";
import { options } from '../../../../assets/tag/Tech'
import { Box, DialogContent, DialogTitle, IconButton, TextField, Typography } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import MKButton from "component/common/mui-components/MKButton";

export default (props) => {

    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        if (sessionStorage.getItem("user")) {
            setUserInfo(JSON.parse(sessionStorage.getItem("user")));
        }
    }, []);

    const [project, setProject] = useState({
        group_name: '',
        project_name: '',
        short_description: '',
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


    const [selected, setSelected] = useState([]);

    const createGroup = () => {
        const newGroupData = {
            ...project,
            long_description: convertedContent,
            tech_stack: selected.map((s) => s.value),
            manager: userInfo.user_id,
            members: [{
                user_id: userInfo.user_id,
                user_name: userInfo.user_name,
                user_email: userInfo.user_email,
                user_role: []
            }],
            close_application: false,
            end_project: false
            // applied : [],
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
                    console.log(response.data);
                    window.location.reload()
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
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
                        <Typography variant="h4" variant="h3">
                            프로젝트 그룹 만들기
                        </Typography>
                        <IconButton size="large" onClick={() => props.setOpen(false)}><ClearIcon fontSize="inherit" /></IconButton >
                    </Box>
                </DialogTitle>
                <DialogContent dividers={true}>
                    <Typography variant="h4">그룹명</Typography>
                    <TextField type="text" className="form-control mb-4" value={project.group_name} id="group_name" onChange={handleInput} />
                    <Typography variant="h4">프로젝트명</Typography>
                    <TextField type="text" className="form-control mb-4" value={project.project_name} id="project_name" onChange={handleInput} />
                    <Typography variant="h4">간단소개글</Typography>
                    <TextField type="text" className="form-control mb-4" value={project.short_description} id="short_description" onChange={handleInput} />
                    <div className="mb-4">
                        <Typography variant="h4">Tech Stack</Typography>
                        {/* <pre>{JSON.stringify(selected)}</pre> */}
                        <MultiSelect
                            options={options}
                            value={selected}
                            onChange={setSelected}
                            labelledBy="Select"
                        />
                    </div>
                    <Typography variant="h4">상세소개글</Typography>
                    <div>
                        <Editor
                            editorState={editorState}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            onEditorStateChange={handleEditorChange}
                        />
                    </div>
                </DialogContent>
                <MKButton color="success" onClick={() => createGroup()} fullWidth disabled={userInfo === null}>등록하기</MKButton>
            </Box>
        </>
    )
}