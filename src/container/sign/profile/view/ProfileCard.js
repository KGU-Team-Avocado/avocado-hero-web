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

    const user = props.profile;

    return (
        <>
            <Grid container spacing={1}>
                <Grid item xxl={3} sx={{width:'100%'}}>
                    <Stack spacing={1}>
                        <Card>
                            <CardActionArea>
                                <CardContent>
                                    <Avatar user_id={user?.user_id} />
                                    <Typography>
                                        {user.nickname}
                                    </Typography>
                                    <Typography>
                                        {user.name}
                                    </Typography>
                                    <Typography>
                                        {user.email}
                                    </Typography>
                                    <Typography>
                                        {user.phoneNum}
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
                                        {user.one_intro}
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
                                        {user && user.belong}
                                    </Typography>
                                    <Typography>분야</Typography>
                                    <Typography>{user && <TechStack tech_stack={user.field} />}</Typography>
                                    <Typography>링크</Typography>
                                    <Typography>
                                        <a href={user && user.link}>{user && user.link}</a>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card>
                            <CardActionArea>
                                <CardContent>
                                    <Typography>세부 정보</Typography>
                                    <Typography>키워드</Typography>
                                    <Typography>{user && <TechStack tech_stack={user.keyword} />}</Typography>
                                    <Typography>성향</Typography>
                                    <Typography>
                                        {
                                            user &&
                                            <TechStack
                                                tech_stack={user.personality}
                                            />
                                        }
                                    </Typography>
                                    <Typography>소개글</Typography>
                                    <Typography>{user && user.intro}</Typography>
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