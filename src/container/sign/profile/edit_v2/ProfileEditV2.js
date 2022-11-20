import { Typography } from "@mui/material";
import ResponsiveCard from "component/common/ResponsiveCard";
import { useEffect, useState } from "react";
import Avatar from "../avatar/Avatar";
import * as API from "../../../../api/API";
import { useSelector } from "react-redux";
import { selectUser } from "api/redux/user/userSlice";

const ProfileEditV2 = () => {

    const user = useSelector(selectUser);
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        getUserProfile();
    }, [user]);

    const getUserProfile = async () => {
        setProfile(await API.findOneUserByUserId(user.user_id));
    }

    return (
        <>
            <Typography variant="h3">프로필 수정</Typography>
            <ResponsiveCard>
                <Avatar edit={true} user_id={profile?.user_id} imgURL={profile?.imgURL}/>
                {JSON.stringify(profile)}
            </ResponsiveCard>
        </>
    )
}

export default ProfileEditV2;