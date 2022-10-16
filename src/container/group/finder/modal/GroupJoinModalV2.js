import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TechStack from "../../../../component/common/TechStack";
import DOMPurify from "dompurify";
import axios from "axios";
import { Box, Button, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import MKButton from "component/common/mui-components/MKButton";

export default (props) => {

    const group = props.selectedGroup

    const [message, setMessage] = useState('');

    const handleMessageChange = event => {
        setMessage(event.target.value);
        console.log(event.target.value);
    };

    const [userInfo, setUserInfo] = useState(null);

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
                    <h4>{group?.group_name}</h4>
                    <h3>{group?.project_name}</h3>
                    <h5>{group?.short_description}</h5>
                    <hr />
                    <div dangerouslySetInnerHTML={createMarkup(group?.long_description)}></div>
                    <hr />
                    <h5>Tech Stack</h5>
                    <div>
                        <TechStack tech_stack={group ? group.tech_stack : []} />
                    </div>
                    <hr />
                    <h5>팀장</h5>
                    <div><Link target="_blank" to={'/user/' + group?.manager}>{group?.manager}</Link></div>
                    <hr />
                    <h5>자기소개서</h5>
                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={handleMessageChange}
                    />
                </DialogContent>
                {/* <DialogActions> */}
                    <MKButton color="success" onClick={() => groupApply()} fullWidth disabled={userInfo?.user_id == group?.manager }>신청하기</MKButton>
                {/* </DialogActions> */}
            </Box>
        </>
    )
}