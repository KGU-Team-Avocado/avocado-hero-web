import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TechStack from "../../../../component/common/TechStack";
import DOMPurify from "dompurify";
import axios from "axios";
import { Box, Button, DialogActions, DialogContent, DialogTitle, Divider, IconButton, Tooltip, Typography } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import MKButton from "component/common/mui-components/MKButton";

export default (props) => {

    const group = props.selectedGroup

    const [message, setMessage] = useState('');

    const handleMessageChange = event => {
        setMessage(event.target.value);
        console.log(event.target.value);
    };

    const [userInfo, setUserInfo] = useState(null); //redux로 수정예정

    useEffect(() => {
        if (sessionStorage.getItem("user")) {
            setUserInfo(JSON.parse(sessionStorage.getItem("user")));
        }
    }, []);

    const createMarkup = (html) => {
        return {
            __html: DOMPurify.sanitize(html)
        }
    };

    const groupApply = () => {

        console.log('깔깔')
        axios.post('/groupsRouter/apply', {
            group_id: group._id,
            group_name: group.group_name,
            project_name: group.project_name,
            user_id: userInfo.user_id,
            user_name: userInfo.name,
            user_email: userInfo.email,
            status: "대기",
            message: message,
        }).then((response) => { //서버로부터 받아온 id
            console.log(response.data)
            if (response.data.success === true) {
                window.location.reload()
            }
        }).catch(function (error) {
            console.log(error);
        });
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
                            신청하기
                        </Typography>
                        <IconButton size="large" onClick={() => props.setOpen(false)}><ClearIcon fontSize="inherit" /></IconButton >
                    </Box>
                </DialogTitle>
                <DialogContent dividers={true}>
                    <Typography variant="h4">
                        {group?.group_name}
                    </Typography>
                    <Typography variant="h3">
                        {group?.project_name}
                    </Typography>
                    <Typography variant="h5">
                        {group?.short_description}
                    </Typography>
                    <Divider />
                    <Typography variant="h5">
                        Tech Stack
                    </Typography>
                    <TechStack tech_stack={group ? group.tech_stack : []} />
                    <Divider />
                    <Typography variant="h5">
                        팀장
                    </Typography>
                    <Tooltip title="새 창으로 이동합니다.">
                        <MKButton
                            variant="contained"
                            color="info"
                            onClick={() => window.open(`user/${group?.manager}`)}
                        >
                            {group?.manager}의 프로필 보기
                        </MKButton>
                    </Tooltip>
                    <Divider />
                    <Typography variant="h5">
                        상세 소개
                    </Typography>
                    <div dangerouslySetInnerHTML={createMarkup(group?.long_description)}></div>
                    <Divider />
                    <Typography variant="h5">
                        자기소개서
                    </Typography>
                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={handleMessageChange}
                    />
                </DialogContent>
                {/* <DialogActions> */}
                <MKButton
                    color="success"
                    onClick={() => groupApply()}
                    fullWidth disabled={userInfo?.user_id == group?.manager}
                >
                    신청하기
                </MKButton>
                {/* </DialogActions> */}
            </Box>
        </>
    )
}