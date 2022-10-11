import { Box, Typography } from "@mui/material";
import axios from "axios";
import GroupCardV2 from "component/group/card/GroupCardV2";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as API from "../../../../api/API";


export default (props) => {

    const navigate = useNavigate();

    const [liveGroups, setLiveGroups] = useState([]);
    const [endGroups, setEndGroups] = useState({});

    const handleGroupCard = (group) => {
        // alert(JSON.stringify(group))
        if (window.confirm(`${group.project_name}으로 이동하시겠습니까?`)) {
            navigate(`/workspace/${group._id}`);
        }
    }

    const [appliedGroups, setAppliedGroups] = useState([]);
    const sessionStorage = window.sessionStorage;

    useEffect(() => {
        if (sessionStorage.getItem("user")) {
            const userInfo = JSON.parse(sessionStorage.getItem("user"))
            axios.post("/groupsRouter/getAppliedGroup", {
                user_id: userInfo.user_id,
            }).then((response) => {
                setAppliedGroups(response.data);
            }).catch(function (error) {
                console.log(error);
            });
            axios.post("/groupsRouter/getMyGroup", {
                user_id: userInfo.user_id,
            }).then((response) => {
                setLiveGroups(response.data);
            }).catch(function (error) {
                console.log(error);
            });
        }
    }, []);

    return (
        <>
            <Box sx={{ my: 3 }}>
                <Typography variant="h4">
                    현재 소속 그룹
                </Typography>
                <div className="my-3 row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3 align-items-stretch ">
                    {
                        liveGroups.length > 0
                            ?
                            <>
                                {
                                    liveGroups.map((group) => (
                                        <GroupCardV2
                                            key={group._id}
                                            group={group}
                                            handleGroupCard={handleGroupCard}
                                        />
                                    ))
                                }
                            </>
                            :
                            <Typography variant="h6">현재 소속된 프로젝트가 없습니다.</Typography>
                    }
                </div>
            </Box>

            <Box sx={{ my: 3 }}>
                <Typography variant="h4">
                    종료된 소속 그룹
                </Typography>
                <div className="my-3 row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3 align-items-stretch ">
                    {
                        liveGroups.filter((group) => group.end_project === true).length > 0
                            ?
                            <>
                                {
                                    liveGroups.filter((group) => group.end_project === true).map((group) => (
                                        <GroupCardV2
                                            key={group._id}
                                            group={group}
                                            handleGroupCard={handleGroupCard}
                                        />
                                    ))
                                }
                            </>
                            :
                            <Typography variant="h6">종료된 프로젝트가 없습니다.</Typography>
                    }
                </div>
            </Box>
        </>
    )
}