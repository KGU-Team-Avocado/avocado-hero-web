import axios from "axios";
import { useEffect, useState, useRef } from "react";
import GroupCard from "../../../component/group/card/GroupCard";
import * as API from "../../../api/API";
import GroupCardV2 from "component/group/card/GroupCardV2";
import { useNavigate } from "react-router-dom";

export default (props) => {
    
    const navigate = useNavigate();

    const [groups, setGroups] = useState([]);
    const [group, setGroup] = useState({});

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
                setGroups(response.data);
            }).catch(function (error) {
                console.log(error);
            });
        }
    }, []);

    return (
        <>

            <div className="my-3">
                <br />
                <h4>현재 소속 그룹</h4>
                <div className="my-3 row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3 align-items-stretch ">
                    {
                        groups.length > 0
                            ?
                            <>
                                {
                                    groups.map((group) => (
                                        <GroupCardV2
                                            key={group._id}
                                            group={group}
                                            handleGroupCard={handleGroupCard}
                                        />
                                    ))
                                }
                            </>
                            :
                            <div>프로젝트가 없습니다.</div>
                    }
                </div>
            </div>

            <div className="my-3">
                <br />
                <h4>종료된 소속 그룹</h4>
                <div className="my-3 row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3 align-items-stretch ">
                    {
                        groups.length > 0
                            ?
                            <>
                                {
                                    groups.map((group) => {
                                        if (group.end_project == true) {
                                           return <GroupCardV2
                                                key={group._id}
                                                group={group}
                                                handleGroupCard={handleGroupCard}
                                            />
                                        }
                                        else
                                        {<div>종료된 프로젝트가 없습니다.</div>}   
                                    }
                                    )
                                }
                            </>
                            :
                            <div>종료된 프로젝트가 없습니다.</div>
                    }
                </div>
            </div>
        </>
    )
}