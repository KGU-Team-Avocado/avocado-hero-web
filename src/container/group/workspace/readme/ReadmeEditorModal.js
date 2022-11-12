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
import { selectGroup } from "api/redux/group/groupSlice";

const ReadmeEditorModal = ({ open, setOpen }) => {

    const userInfo = useSelector(selectUser);
    const group = useSelector(selectGroup);

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

    const createReadme = async () => {
        alert('버튼을 눌렀음')
        console.log('저장시도')
        const response = await API.saveReadme({
            id: group._id,
            read_me: convertedContent,
        });
        console.log(response);
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
                            Read me 수정하기
                        </Typography>
                        <IconButton size="large" onClick={() => setOpen(false)}><ClearIcon fontSize="inherit" /></IconButton >
                    </Box>
                </DialogTitle>
                <DialogContent dividers={true}>
                    <Stack spacing={1}>


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