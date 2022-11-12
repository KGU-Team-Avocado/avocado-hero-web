import { useState } from "react"
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToHTML } from 'draft-convert';
import { EditorState } from 'draft-js';
import { Box, Button, DialogContent, DialogTitle, IconButton, Stack, TextField, Typography } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "api/redux/user/userSlice";
import * as API from "../../../../api/API"
import axios from "axios";

const ReadmeEditorModal = ({ open, setOpen }) => {

    const userInfo = useSelector(selectUser);

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

    const createReadme = async (project) => {
        const newReadmeData = {
            ...project,
            read_me: convertedContent,
        }
        console.log(newReadmeData)
        alert('버튼을 눌렀음')
        console.log('저장시도')
        const response = await API.saveReadme(newReadmeData);
        console.log('저장 완');
        // const hasValue = Object.values(newReadmeData).includes("");
        // if (hasValue) {
        //     alert('빈 칸을 모두 채워주세요')
        // }
        // else {
        //     console.log('저장시도')
        //     const response = await API.saveReadme(newReadmeData);
        //     console.log(response)
        // }
        //     if (response.data.compIdCheck === false) {
        //         alert("이미 사용중인 제목입니다.");
        //         return;
        // } 수정
        alert("리드미 등록 성공");
        window.location.reload();
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
                            Read me 수정
                        </Typography>
                        <IconButton size="large" onClick={() => setOpen(false)}><ClearIcon fontSize="inherit" /></IconButton >
                    </Box>
                </DialogTitle>
                <DialogContent dividers={true}>
                    <Stack spacing={1}>


                        <Box>
                            <Typography variant="h4">Read me</Typography>
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

                    </Stack>
                </DialogContent>
                <Stack>
                    <Button
                        color="success"
                        onClick={() => createReadme()}
                        fullWidth
                        disabled={userInfo === null}
                    >
                        등록하기
                    </Button>
                </Stack>
            </Box>

        </>
    )
}

export default ReadmeEditorModal;