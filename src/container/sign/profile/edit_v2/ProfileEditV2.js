import { Box, Stack, TextField, Typography } from "@mui/material";
import ResponsiveCard from "component/common/ResponsiveCard";
import { useEffect, useState } from "react";
import Avatar from "../avatar/Avatar";
import * as API from "../../../../api/API";
import { useSelector } from "react-redux";
import { selectUser } from "api/redux/user/userSlice";

const ProfileEditV2 = () => {

    const user = useSelector(selectUser);
    const [profile, setProfile] = useState(null);

    const handleInput = (state) => {
        console.log(state)
        setProfile({
            ...profile,
            [state.target.id]: state.target.value
        })
    }

    useEffect(() => {
        getUserProfile();
    }, [user]);

    const getUserProfile = async () => {
        setProfile(await API.findOneUserByUserId(user.user_id));
    }

    return (
        <>
            {JSON.stringify(profile)}
            <Typography variant="h3">프로필 수정</Typography>
            <Box marginBottom={2}>
                <ResponsiveCard>
                    <>
                        <Avatar edit={true} user_id={profile?.user_id} imgURL={profile?.imgURL} />
                        <Box marginBottom={2}>
                            <TextField
                                fullWidth
                                label="닉네임"
                                variant="outlined"
                                value={profile?.nickname}
                                id="nickname"
                                onChange={handleInput}
                                focused
                            />
                        </Box>
                        <Box marginBottom={2}>
                            <TextField
                                fullWidth
                                label="이름"
                                variant="outlined"
                                value={profile?.name}
                                id="name"
                                onChange={handleInput}
                                focused
                            />
                        </Box>
                        <Box marginBottom={2}>
                            <TextField
                                fullWidth
                                label="이메일"
                                variant="outlined"
                                value={profile?.email}
                                id="email"
                                onChange={handleInput}
                                focused
                            />
                        </Box>
                        <Box marginBottom={2}>
                            <TextField
                                fullWidth
                                label="전화번호"
                                variant="outlined"
                                value={profile?.phoneNumber}
                                id="phoneNumber"
                                onChange={handleInput}
                                focused
                            />
                        </Box>
                    </>
                </ResponsiveCard>
            </Box>
            <Box marginBottom={2}>
                <ResponsiveCard>
                    <Box>
                        <TextField
                            fullWidth
                            label="한줄소개"
                            variant="outlined"
                            value={profile?.introduceOne}
                            id="introduceOne"
                            onChange={handleInput}
                            focused
                        />
                    </Box>
                </ResponsiveCard>
            </Box>
            <Box marginBottom={2}>
                <ResponsiveCard>
                    <Box marginBottom={2}>
                        <TextField
                            fullWidth
                            label="소속"
                            variant="outlined"
                            value={profile?.belongs}
                            id="belongs"
                            onChange={handleInput}
                            focused
                        />
                    </Box>
                    <Box marginBottom={2}>
                        <TextField
                            fullWidth
                            label="분야"
                            variant="outlined"
                            value={profile?.belongs}
                            id="belongs"
                            onChange={handleInput}
                            focused
                        />
                    </Box>
                    <Box marginBottom={2}>
                        <TextField
                            fullWidth
                            label="링크"
                            variant="outlined"
                            value={profile?.links}
                            id="belongs"
                            onChange={handleInput}
                            focused
                        />
                    </Box>
                </ResponsiveCard>
            </Box>
            <Box marginBottom={2}>
                <ResponsiveCard>
                    <Box marginBottom={2}>
                        <TextField
                            fullWidth
                            label="키워드"
                            variant="outlined"
                            value={profile?.keywords}
                            id="belongs"
                            onChange={handleInput}
                            focused
                        />
                    </Box>
                    <Box marginBottom={2}>
                        <TextField
                            fullWidth
                            label="성향"
                            variant="outlined"
                            value={profile?.personalities}
                            id="belongs"
                            onChange={handleInput}
                            focused
                        />
                    </Box>
                    <Box marginBottom={2}>
                        <TextField
                            fullWidth
                            label="소개글"
                            variant="outlined"
                            value={profile?.introduce}
                            id="belongs"
                            onChange={handleInput}
                            focused
                        />
                    </Box>
                </ResponsiveCard>
            </Box>

        </>
    )
}

export default ProfileEditV2;