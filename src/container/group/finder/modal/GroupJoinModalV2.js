import { useState } from "react";
import TechStack from "../../../../component/common/TechStack";
import DOMPurify from "dompurify";
import axios from "axios";
import { Box, DialogContent, DialogTitle, Divider, IconButton, Tooltip, Typography } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import MKButton from "component/common/mui-components/MKButton";
import { useSelector } from "react-redux";
import { selectUser } from "api/redux/user/userSlice";
import UserProfileCard from "component/jobFinder/UserProfileCard";
import ModalStaticBackdrop from "component/common/modal/ModalStaticBackdrop";
import BadgeStack from "component/common/BadgeStack";
import GroupInfo from "component/group/common/GroupInfo";


const GroupJoinModalV2 = (props) => {

    const group = props.selectedGroup;

    const [message, setMessage] = useState('');

    const handleMessageChange = event => {
        setMessage(event.target.value);
        console.log(event.target.value);
    };

    const userInfo = useSelector(selectUser);

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

    const isApplicant = (user_id) => {
        for (var i = 0; i < props?.group?.length; i++) {
            if (user_id === props?.applicants[i]?.user_id)
                return true;
        }
        return false;
    }

    const isGroupMember = (user_id) => {
        for (var i = 0; i < group?.members?.length; i++) {
            if (user_id === group?.members[i]?.user_id)
                return true;
        }
        return false;
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
                        <IconButton
                            size="large"
                            onClick={() => {
                                props.setOpen(false);
                                setMessage('');
                            }}>
                            <ClearIcon fontSize="inherit" />
                        </IconButton >
                    </Box>
                </DialogTitle>
                <DialogContent dividers={true}>
                    <GroupInfo group={group} />
                    <Typography variant="h5">
                        상세 소개
                    </Typography>
                    <div dangerouslySetInnerHTML={createMarkup(group?.long_description)} style={{minHeight:'300px'}}></div>
                    <Divider />
                    <Typography variant="h5">
                        Tech Stack
                    </Typography>
                    <BadgeStack type='tech' stack={group ? group.tech_stack : []} />
                    <Typography variant="h5">
                        이런 성향을 원해요
                    </Typography>
                    <BadgeStack type='personal' stack={group ? group.personal_stack : []} />
                    <Typography variant="h5">
                        이런 역할이 반드시 필요해요
                    </Typography>
                    <BadgeStack type='role' stack={group ? group.role_stack : []} />
                    <Divider />
                    <Typography variant="h5">
                        자기소개서
                    </Typography>
                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={handleMessageChange}
                        className="w-100"
                    />

                </DialogContent>
                {/* <DialogActions> */}
                <MKButton
                    color="success"
                    onClick={() => groupApply()}
                    fullWidth
                    disabled={
                        userInfo === null ||
                        (userInfo?.user_id == group?.manager) ||
                        isApplicant(userInfo.user_id) ||
                        isGroupMember(userInfo.user_id)
                    }
                >
                    신청하기
                </MKButton>
                {/* </DialogActions> */}
            </Box>
        </>
    )
}

export default GroupJoinModalV2;