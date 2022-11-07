import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { role } from "../../../../assets/tag/Role";
import ModifyRole from "../../../../component/workspace/role/ModifyRole";
import RoleBadge from "../../../../component/workspace/role/RoleBadge";
import { useDispatch, useSelector } from "react-redux";
import { selectGroup } from "api/redux/group/groupSlice";
import { getGroupAsync } from "api/redux/group/groupSlice";
import { Box, Divider, Grid, Typography } from "@mui/material";
import RoleCard from "component/workspace/role/RoleCard";
import WorkspaceHeader from "component/workspace/layout/WorkspaceHeader";

const RoleContainer = (props) => {
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
        console.log(edit)
        const user = group.members.find((mem) => mem.user_id === edit)
        const select = user.user_role.map((role) => {return findRole(role)})
        setEdit(edit);
        setSelected(select)
    }
    
    const cancleEdit = () => {
        setEdit("");
        setSelected([])
    }

    const findRole = (r) => {
        const idx = role.findIndex((role)=>role.value===r)
        return role[idx]
    }

    return (
        <>
            <WorkspaceHeader
                title={props.title}
            />

            <Box>
                <Grid container rowSpacing={{ xs: 1, sm: 1, md: 2 }} columnSpacing={{ sm: 1, md: 2 }}>
                    {group.members.map((member, index) => (
                        <RoleCard 
                            group={group}
                            member={member}
                            index={index}
                            edit={edit}
                            editWho={editWho}
                            modifyRole={
                                <ModifyRole
                                    role={role}
                                    member={member}
                                    selected={selected}
                                    setSelected={setSelected}
                                    modifyRole={modifyRole}
                                    cancleEdit={cancleEdit}
                                />
                            }
                            roleBadge={
                                <RoleBadge
                                    findRole={findRole}
                                    member={member}
                                    selected={selected}
                                    editWho={editWho}
                                />}
                        />
                    ))}
                </Grid>
            </Box>
        </>
    )
}

export default RoleContainer;