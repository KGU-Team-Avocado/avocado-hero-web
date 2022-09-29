import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { role } from "../../../assets/tag/Role";
import ModifyRole from "../../../component/workspace/role/ModifyRole";
import RoleBadge from "../../../component/workspace/role/RoleBadge";
import * as API from "../../../api/API";
import { useDispatch, useSelector } from "react-redux";
import { selectGroup } from "api/redux/group/groupSlice";
import { getGroupAsync } from "api/redux/group/groupSlice";
import { Box, Card, CardContent, CardMedia, Divider, Grid, IconButton, Stack, Typography } from "@mui/material";

const ProjectRoleContainer = () => {
    const group = useSelector(selectGroup);
    const dispatch = useDispatch();

    const params = useParams();
    const project_id = params.id;

    const [edit, setEdit] = useState('');
    const [selected, setSelected] = useState([]);

    const modifyRole = (member) => {
        setEdit("");
        setSelected([]);
        const selecteRole = selected.map((s) => {return s.value})
        
        axios.post("/groupsRouter/updateRole", {
            _id: project_id,
            user_id: member.user_id,
            user_role: selecteRole
        }).then((response) => {
            console.log(response.data);
            dispatch(getGroupAsync(project_id))
        }).catch(function (error) {
            console.log(error);
        });
    }

    const editWho = (edit) => {
        const user = group.members.find((mem) => mem.user_id === edit)
        const select = user.user_role.map((role) => {return findRole(role)})
        setEdit(edit);
        setSelected(select)
    }

    const findRole = (r) => {
        const idx = role.findIndex((role)=>role.value===r)
        return role[idx]
    }

    return (
        <>
            <Grid container columnSpacing={2}>
                <Grid display="flex" justifyContent="start" alignItems="center">
                    <Typography variant="h3" mx={2}>
                        역할
                    </Typography>
                </Grid>
            </Grid>

            <Divider sx={{ border: 1 }}/>

            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                {group.members.map(member => (
                    <Card sx={{ display: 'flex' }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                            alt="Live from space album cover"
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    {member.user_id === group.manager ?
                                        '팀장'
                                        :
                                        '팀원'
                                    }
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    {member.user_name}
                                </Typography>
                                {edit === member.user_id ?
                                    <ModifyRole
                                        role={role}
                                        member={member}
                                        selected={selected}
                                        setSelected={setSelected}
                                        modifyRole={modifyRole}
                                        cancleEdit={editWho}
                                    />
                                    :
                                    <>
                                        <RoleBadge
                                            findRole={findRole}
                                            member={member}
                                            selected={selected}
                                            editWho={editWho}
                                        />
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
                ))}
            </Stack>
        </>
    )
}

export default ProjectRoleContainer;