import { useEffect, useState } from "react"
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToHTML } from 'draft-convert';
import { EditorState } from 'draft-js';
import { MultiSelect } from "react-multi-select-component";
import axios from "axios";
import { options } from '../../../../assets/tag/Tech'
import { Box, DialogContent, DialogTitle, IconButton, Stack, TextField, Typography } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import MKButton from "component/common/mui-components/MKButton";
import React from "react";

const ReadmeEditorModal = ({open,setOpen}) => {

    // const [userInfo, setUserInfo] = useState(null);

    // useEffect(() => {
    //     if (sessionStorage.getItem("user")) {
    //         setUserInfo(JSON.parse(sessionStorage.getItem("user")));
    //     }
    // }, []);

    // const [project, setProject] = useState({
    //     group_name: '',
    //     project_name: '',
    //     short_description: '',
    // })

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

    // const handleInput = (state) => {
    //     console.log(state)
    //     setProject({
    //         ...project,
    //         [state.target.id]: state.target.value
    //     })
    // }

    // const createGroup = () => {
    //     const newGroupData = {
    //         ...project,
    //         long_description: convertedContent,
    //         manager: userInfo.user_id,
    //         members: [{
    //             user_id: userInfo.user_id,
    //             user_name: userInfo.name,
    //             user_email: userInfo.email,
    //             user_role: []
    //         }],
    //         close_application: false,
    //         end_project: false
    //         // applied : [],
    //     }
    //     console.log(newGroupData)

    //     const hasValue = Object.values(newGroupData).includes("");
    //     if (hasValue) {
    //         alert('빈 칸을 모두 채워주세요')
    //     }
    //     else {
    //         axios
    //             .post("/groupsRouter/create", newGroupData)
    //             .then((response) => {
    //                 if (response.data.success === true) {
    //                     // alert(JSON.stringify(response.data.group._id));
    //                         alert('no img')
    //                         window.location.reload();       
    //                 }
    //                 else {
    //                     alert('server error.')
    //                 }
    //             })
    //             .catch(function (error) {
    //                 console.log(error);
    //             });
    //     }
    // }

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
                            Read me 수정
                        </Typography>
                        <IconButton size="large" onClick={() => setOpen(false)}><ClearIcon fontSize="inherit" /></IconButton >
                    </Box>
                </DialogTitle>
                <DialogContent dividers={true}>
                    <Stack spacing={1}>
                        {
                            open &&
                            <Box>
                                <Typography variant="h4">상세소개글</Typography>
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
                {/* <MKButton color="success" onClick={() => createGroup()} fullWidth disabled={userInfo === null}>등록하기</MKButton> */}
            </Box>
        </>
    )
}

export default ReadmeEditorModal;