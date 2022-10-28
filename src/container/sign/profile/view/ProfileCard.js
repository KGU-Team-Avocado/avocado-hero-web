import { Card, CardActionArea, CardContent, Grid, Stack, Typography } from "@mui/material";
import ResponsiveCard from "component/common/ResponsiveCard";
import TechStack from "component/common/TechStack";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "../avatar/Avatar";
import ProfileGroup from "./ProfileGroup";
import ProfilePortpolio from "./ProfilePortpolio";

export default (props) => {

    const navigate = useNavigate();
    const [groups, setGroups] = useState([]);

    const setSelectedGroup = (group) => {
        if (window.confirm(group.project_name + '으로 이동하시겠습니까?')) {
            navigate(`/workspace/${group._id}`);
        }
    }

    const profile = props.profile;

    return (
        <>
            <Grid container spacing={1}>
                <Grid item xxl={3} sx={{ width: '100%' }}>
                    <Stack spacing={1}>
                        <ResponsiveCard>
                            <Avatar user_id={profile?.user_id} imgURL={profile?.imgURL} />
                            <Typography variant="inherit">
                                {profile?.nickname}
                            </Typography>
                            <Typography variant="h3">
                                {profile?.name}
                            </Typography>
                            <Typography variant="h5">
                                {profile?.user_id}
                            </Typography>
                            <Typography variant="subtitle2">
                                {profile?.email}
                            </Typography>
                            <Typography variant="subtitle2">
                                {profile?.phoneNumber}
                            </Typography>
                        </ResponsiveCard>
                        <ResponsiveCard>
                            <Typography variant="h5">
                                한줄 소개
                            </Typography>
                            <Typography>
                                {profile?.introduceOne}
                            </Typography>
                        </ResponsiveCard>
                    </Stack>
                </Grid>
                <Grid item xxl={9} sx={{ width: '100%' }}>
                    <Stack spacing={1}>
                        <ResponsiveCard>
                            <Typography variant="h3">기본 정보</Typography>
                            <Typography variant="h4">소속</Typography>
                            <Typography>
                                {/* {
                                                belongs.map(belong => (<Map mapper={belong} />))
                                            } */}
                                {profile && profile?.belongs}
                            </Typography>
                            <Typography variant="h4">분야</Typography>
                            <Typography>{profile && <TechStack tech_stack={profile?.fields} />}</Typography>
                            <Typography variant="h4">링크</Typography>
                            <Typography>
                                <a href={profile && profile?.links}>{profile && profile?.links}</a>
                            </Typography>
                        </ResponsiveCard>
                        <ResponsiveCard>
                            <Typography variant="h3">세부 정보</Typography>
                            <Typography variant="h4">키워드</Typography>
                            <Typography>{profile && <TechStack tech_stack={profile?.keywords} />}</Typography>
                            <Typography variant="h4">성향</Typography>
                            <Typography>
                                {
                                    profile &&
                                    <TechStack
                                        tech_stack={profile.personalities}
                                    />
                                }
                            </Typography>
                            <Typography variant="h4">소개글</Typography>
                            <Typography>{profile && profile?.introduce}</Typography>
                        </ResponsiveCard>
                    </Stack>
                </Grid>
            </Grid>
            <ProfileGroup />
            <ProfilePortpolio />
        </>
    )
}