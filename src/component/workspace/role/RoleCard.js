import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";

const RoleCard = ({group, member, index, roleBadge, modifyRole, edit, editWho}) => {
    const params = useParams();
    const project_id = params.id;

    return (
        <Grid item xs={12} sm={6} md={4} key={index} justifyContent="center" alignItems="center">
            <Card sx={{ display: 'flex' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="caption">
                            {member.user_id === group.manager ?
                                '팀장'
                                :
                                '팀원'
                            }
                        </Typography>
                        <Typography variant="h5" component="div">
                            {member.user_name}
                        </Typography>
                        {edit === member.user_id ?
                            modifyRole
                            :
                            <>
                                {roleBadge}
                                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1, mt: 1 }}>
                                    {group.end_project ?
                                        <Link type="button" className="btn btn-secondary me-2" to={"/workspace/" + project_id + '/evaluation/' + member.user_id} >평가하기</Link>
                                        :
                                        <button type="button" className="btn btn-secondary me-2" onClick={() => editWho(member.user_id)} >수정</button>
                                    }
                                </Box>
                            </>
                        }
                    </CardContent>
                </Box>
            </Card>
        </Grid>
    )
}

export default RoleCard;