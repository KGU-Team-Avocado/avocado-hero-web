import { Box, Typography } from "@mui/material";
import { selectUser } from "api/redux/user/userSlice";
import axios from "axios";
import GroupCardV2 from "component/group/card/GroupCardV2";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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

    const user = useSelector(selectUser);

    useEffect(() => {
        // API로 분리할 필요성이 있음
        axios.post("/groupsRouter/getMyGroup", {
            user_id: user.user_id,
        }).then((response) => {
            setLiveGroups(response.data);
            setEndGroups(response.data.filter((group) => group.end_project === true))
        }).catch(function (error) {
            console.log(error);
        });
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
                        endGroups.length > 0
                            ?
                            <>
                                {
                                    endGroups.map((group) => (
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