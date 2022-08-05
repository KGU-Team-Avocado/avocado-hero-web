import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GroupCard from "../../../component/group/card/GroupCard";
import ProjectCard from "../../../component/workspace/card/ProjectCard";

export default () => {
    const [projects, setProjects] = useState([]);
    // 이 부분은 추후에 승인 기능이 추가된 이후 서버에서 받아올 예정

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
                setProjects(response.data);
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
                        projects.length > 0
                            ?
                            <>
                                {
                                    projects.map((project) => (
                                        <Link to={"/project/" + project._id} className="text-decoration-none text-dark">
                                            <div>{project.project_name}</div>
                                        </Link>
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
        </>
    )
}