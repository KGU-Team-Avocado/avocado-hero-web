import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GroupCard from "../../../component/group/card/GroupCard";
import ProjectCard from "../../../component/workspace/card/ProjectCard";
import MoveToWorkSpaceModal from "./modal/MoveToWorkSpaceModal";

export default () => {
    const [groups, setGroups] = useState([]);
    // const [selectedGroup, setSelectedGroup] = useState(null);
    const setSelectedGroup = (group) =>{
        // alert(JSON.stringify(group))
        if(window.confirm(group.project_name+'으로 이동하시겠습니까?')){
            window.location.href="/project/" + group._id;
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
            <div className="position-sticky">
                <h2>내 워크스페이스</h2>
                <div className="row">
                    <div className="col-sm-6">훌륭한 팀을 구해보아요</div>
                    <div className="col-sm-6 text-end"><a className="mx-2" href="#">정렬▿</a><a className="mx-2" href="#">필터링▿</a></div>
                </div>
            </div>
            <div className="my-3">
                <h3>소속된 그룹</h3>
                <div className="row">
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
                <h3>신청한 그룹</h3>
                <div className="row">
                    <div>{JSON.stringify(appliedGroups)}</div>
                </div>
            </div>
            {/* <div className="modal fade" id="group_join" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <MoveToWorkSpaceModal
                    selectedGroup={selectedGroup}
                />
            </div> */}
        </>
    )
}