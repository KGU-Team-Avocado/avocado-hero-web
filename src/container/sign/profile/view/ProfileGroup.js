import { Box, Grid, Typography } from "@mui/material";
import { selectedGroup } from "api/redux/group/groupSlice";
import { selectUser } from "api/redux/user/userSlice";
import axios from "axios";
import ModalStaticBackdrop from "component/common/modal/ModalStaticBackdrop";
import GroupCardV2 from "component/group/card/GroupCardV2";
import ReadmeModal from "container/group/workspace/readme/ReadmeModal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as API from "../../../../api/API";


export default ({ user_id }) => {

    const navigate = useNavigate();

    const [onGroups, setOnGroups] = useState({});
    const [offGroups, setOffGroups] = useState({});

    const [selectedGroup, setSelectedGroup] = useState(null);
    const [groupReadmeModalOpen, setGroupReadmeModalOpen] = useState(false);

    const dispatch = useDispatch();

    const handleGroupCard = (group) => {
        // alert(JSON.stringify(group))
        // if (window.confirm(`${group.project_name}으로 이동하시겠습니까?`)) {
        //     dispatch(selectedGroup(group));
        //     navigate(`/workspace/${group._id}`);
        // }
        setSelectedGroup(group);
        setGroupReadmeModalOpen(true);
    }

    useEffect(() => {
        // API로 분리할 필요성이 있음
        axios.post("/groupsRouter/getMyGroup", {
            user_id: user_id,
        }).then((response) => {
            setOnGroups(response.data.filter((group) => group.end_project === false))
            setOffGroups(response.data.filter((group) => group.end_project === true))
        }).catch(function (error) {
            console.log(error);
        });
    }, []);

    return (
        <>
            <Box sx={{ my: 3 }}>
                <Typography variant="h4">
                    현재 진행중인 프로젝트
                </Typography>
                <Grid
                    container
                    spacing={1}
                    alignItems="stretch"
                >
                    {
                        onGroups.length > 0
                            ?
                            <>
                                {
                                    onGroups.map((group) => (
                                        <Grid item xs={12} md={6} xxl={4}>
                                            <GroupCardV2
                                                key={group._id}
                                                group={group}
                                                handleGroupCard={handleGroupCard}
                                            />
                                        </Grid>
                                    ))
                                }
                            </>
                            :
                            <Typography variant="h6">현재 소속된 프로젝트가 없습니다.</Typography>
                    }
                </Grid>
            </Box>

            <Box sx={{ my: 3 }}>
                <Typography variant="h4">
                    종료된 프로젝트
                </Typography>
                <Grid
                    container
                    spacing={1}
                    alignItems="stretch"
                >
                    {
                        offGroups.length > 0
                            ?
                            <>
                                {
                                    offGroups.map((group) => (
                                        <Grid item xs={12} md={6} xxl={4}>
                                            <GroupCardV2
                                                key={group._id}
                                                group={group}
                                                handleGroupCard={handleGroupCard}
                                            />
                                        </Grid>
                                    ))
                                }
                            </>
                            :
                            <Typography variant="h6">종료된 프로젝트가 없습니다.</Typography>
                    }
                </Grid>
            </Box>

            <ModalStaticBackdrop
                keepMounted
                width="md"
                open={groupReadmeModalOpen}
                component={<ReadmeModal group={selectedGroup} setOpen={setGroupReadmeModalOpen} />}
            />
        </>
    )
}