import { Card, CardActionArea, CardContent, Grid, Stack, Typography } from "@mui/material";
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
                <Grid item xxl={3} sx={{width:'100%'}}>
                    <Stack spacing={1}>
                        <Card>
                            <CardActionArea>
                                <CardContent>
                                    <Avatar user_id={profile?.user_id} />
                                    <Typography>
                                        {profile?.nickname}
                                    </Typography>
                                    <Typography>
                                        {profile?.name}
                                    </Typography>
                                    <Typography>
                                        {profile?.email}
                                    </Typography>
                                    <Typography>
                                        {profile?.phoneNumber}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card>
                            <CardActionArea>
                                <CardContent>
                                    <Typography>
                                        한줄 소개
                                    </Typography>
                                    <Typography>
                                        {profile?.introduceOne}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Stack>
                </Grid>
                <Grid item xxl={9} sx={{width:'100%'}}>
                    <Stack spacing={1}>
                        <Card>
                            <CardActionArea>
                                <CardContent>
                                    <Typography>기본 정보</Typography>
                                    <Typography>소속</Typography>
                                    <Typography>
                                        {/* {
                                                belongs.map(belong => (<Map mapper={belong} />))
                                            } */}
                                        {profile && profile?.belongs}
                                    </Typography>
                                    <Typography>분야</Typography>
                                    <Typography>{profile && <TechStack tech_stack={profile?.fields} />}</Typography>
                                    <Typography>링크</Typography>
                                    <Typography>
                                        <a href={profile && profile?.links}>{profile && profile?.links}</a>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card>
                            <CardActionArea>
                                <CardContent>
                                    <Typography>세부 정보</Typography>
                                    <Typography>키워드</Typography>
                                    <Typography>{profile && <TechStack tech_stack={profile?.keywords} />}</Typography>
                                    <Typography>성향</Typography>
                                    <Typography>
                                        {
                                            profile &&
                                            <TechStack
                                                tech_stack={profile.personalities}
                                            />
                                        }
                                    </Typography>
                                    <Typography>소개글</Typography>
                                    <Typography>{profile && profile?.introduce}</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Stack>
                </Grid>
            </Grid>
            <ProfileGroup />
            <ProfilePortpolio />
        </>
    )
}