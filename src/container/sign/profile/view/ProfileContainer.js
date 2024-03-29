import CloseIcon from '@mui/icons-material/Close';
import { Alert, Box, CircularProgress, Collapse, IconButton, Typography } from '@mui/material';
import { selectUser } from 'api/redux/user/userSlice';
import MKButton from 'component/common/mui-components/MKButton';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import * as API from "../../../../api/API";
import ProfileCard from './ProfileCard';


const ProfileContainer = () => {
    const navigate = useNavigate();
    const params = useParams(); //url로 넘어온 파라미터를 받는 역할 (App.js 의 :id 참고)
    const user = useSelector(selectUser);
    const profile_id = params.id; //(params의 :id를 받는 역할)
    const [profile, setProfile] = useState(null);
    const [isLoaded, setLoaded] = useState(false);
    const [alertOpen, setAlertOpen] = useState(true);

    useEffect(() => {
        getAndSetUserProfile(profile_id);
    }, [profile_id]);

    const getAndSetUserProfile = async (profile_id) => {
        const temp = await API.findOneUserByUserId(profile_id);
        await setProfile(temp);
        setLoaded(true);
    };

    return (
        <>
            {
                isLoaded
                    ?
                    (
                        profile ?
                            <>
                                {
                                    user?.user_id === profile.user_id
                                        ?
                                        <Collapse in={alertOpen}>
                                            <Alert
                                                action={
                                                    <IconButton
                                                        aria-label="close"
                                                        color="inherit"
                                                        size="small"
                                                        onClick={() => {
                                                            setAlertOpen(false);
                                                        }}
                                                    >
                                                        <CloseIcon fontSize="inherit" />
                                                    </IconButton>
                                                }
                                                sx={{ mb: 2 }}
                                            >
                                                멋진 프로필을 작성하면 기업이 당신을 스카우트할 수 있습니다.
                                            </Alert>
                                        </Collapse>
                                        :
                                        <></>
                                }
                                <Box
                                    width="100%"
                                    display="flex"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    mb={5}
                                >
                                    <Typography variant="h3">
                                        {profile.user_id}의 프로필
                                    </Typography>
                                    {
                                        user?.user_id === profile.user_id
                                            ?
                                            <>
                                                                                        <MKButton
                                                variant="contained"
                                                color="info"
                                                onClick={() => navigate(`/user/profile/update/${profile.user_id}`)}
                                            >
                                                프로필 수정
                                            </MKButton>
                                            {/* <MKButton
                                                variant="contained"
                                                color="info"
                                                onClick={() => navigate(`/user/ProfileUpdate/${profile.user_id}`)}
                                            >
                                                프로필 수정
                                            </MKButton> */}
                                            </>

                                            :
                                            <></>
                                    }
                                </Box>
                                <ProfileCard
                                    profile={profile}
                                />
                            </>
                            :
                            <Typography>누구쎄용?</Typography>
                    )
                    :
                    <Box sx={{ alignItems: 'center', display: 'flex', minHeight:'500px', justifyContent: 'center', width:'100%' }}>
                        <CircularProgress />
                    </Box>
            }
        </>
    );
};

export default ProfileContainer;