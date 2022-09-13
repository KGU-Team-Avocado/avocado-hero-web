import axios from "axios";
import { useEffect, useState, useRef } from "react";
import GroupCard from "../../../component/group/card/GroupCard";

export default (props) => {
    const [groups, setGroups] = useState([]);
    // const [selectedGroup, setSelectedGroup] = useState(null);
    const setSelectedGroup = (group) => {
        // alert(JSON.stringify(group))
        if (window.confirm(group.project_name + '으로 이동하시겠습니까?')) {
            window.location.href = "/project/" + group._id;
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
                    <h4>소속된 그룹</h4>
                    <div className="my-3 row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3 align-items-stretch ">
                                {
                        groups.length > 0
                            ?
                            <>
                                {
                                    groups.map((group) => (
                                        <GroupCard
                                            key={group._id}
                                            group={group}
                                            setSelectedGroup={setSelectedGroup}
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
                <h4>과거 소속 그룹
                    <br />(아직 못해서 소속된 그룹이랑 똑같음.. end project 종료된 것들만 보여주기)</h4> 
                <div className="my-3 row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3 align-items-stretch ">
                    {
                        groups.length > 0
                            ?
                            <>
                                {
                                    groups.map((group) => (
                                        <GroupCard
                                            key={group._id}
                                            group={group}
                                            setSelectedGroup={setSelectedGroup}
                                        />
                                    ))
                                }
                            </>
                            :
                            <div>프로젝트가 없습니다.</div>
                    }
                </div>
            </div>
        </>
    )
}